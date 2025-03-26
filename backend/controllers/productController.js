import pool from "../connectDB/db.js"

export const getAllProducts = async (req, res) => {
    try {
        const allProducts = await pool.query("SELECT * FROM products")
        res.status(200).json({success:true, data: allProducts.rows})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const createProduct = async (req, res) => {
    try {
        const { title, description, price, discount_price, stock, image_url, category_id, brand_id, sold_count, status, tag } = req.body;
       
        if (!title || !price || !stock || !status) {
            return res.status(400).json({ message: "Title, price, stock, and status are required" });
        }

        const createProduct = await pool.query(
            `INSERT INTO products 
                (title, description, price, discount_price, stock, image_url, category_id, brand_id, sold_count, status, tag ,created_at, updated_at)
            VALUES 
                ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW(), NOW()) 
            RETURNING *;`,
            [
                title,
                description || null,
                price,
                discount_price ?? null,
                stock,
                image_url ?? null,
                brand_id ?? null,
                category_id ?? null,
                sold_count ?? 0,
                status,
                tag ?? null,
            ]
        );

        res.status(201).json({ success: true, data: createProduct.rows[0] });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getLandingPageProducts = async (req, res) => {
    try {
        const result = await pool.query(
            `
            (SELECT * FROM products WHERE tag = $1 LIMIT 4)
            UNION ALL
            (SELECT * FROM products WHERE tag = $2 LIMIT 4)
            UNION ALL
            (SELECT * FROM products WHERE tag = $3 LIMIT 4)
            `,
            ['trending', 'sale', 'new']
          );
          
        res.status(200).json({success:true, data: result.rows})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getProduct = async (req, res) => {
    try {
        const { id } = req.params

        if (!/^\d+$/.test(id)) {
            return res.status(400).json({ success: false, message: "Invalid product ID" });
        }

        const result = await pool.query("SELECT * FROM products WHERE id = $1", [id])

        if (result.rows.length === 0) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.status(200).json({success:true, data: result.rows[0]})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}