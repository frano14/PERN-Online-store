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
        const { title, description, price, discount_price, stock, image_url, category_id, brand_id, sold_count, status } = req.body;
       
        if (!title || !price || !stock || !status) {
            return res.status(400).json({ message: "Title, price, stock, and status are required" });
        }

        const createProduct = await pool.query(
            `INSERT INTO products 
                (title, description, price, discount_price, stock, image_url, category_id, brand_id, sold_count, status, created_at, updated_at)
            VALUES 
                ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW(), NOW()) 
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
                status
            ]
        );

        res.status(201).json({ success: true, data: createProduct.rows[0] });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
