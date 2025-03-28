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
        const { 
            title,
            description, 
            price, 
            discount_price, 
            stock, 
            image_url, 
            category_id, 
            brand_id, 
            sold_count, 
            status, 
            tag, 
            year, 
            color, 
            sizes, 
            model,       
            collection_id,  
            version_id
        } = req.body;
       
        if (!price || !stock || !image_url || !status || !collection_id ) {
            return res.status(400).json({ message: "Title, price, stock, status, collection_id and version_id are required", data: {price, stock, image_url, status, collection_id, version_id} });
        }

        const createProduct = await pool.query(
            `INSERT INTO products 
                (title, description, price, discount_price, stock, image_url, category_id, brand_id, sold_count, status, tag, year, color, sizes, model, collection_id, version_id, created_at, updated_at)
            VALUES 
                ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, NOW(), NOW()) 
            RETURNING *;`,
            [
                title || null,
                description || null,
                price,
                discount_price ?? null,
                stock,
                image_url ?? null,
                category_id ?? null,
                brand_id ?? null,
                sold_count ?? 0,
                status,
                tag ?? null,
                year ?? null,
                color ?? null,
                sizes ?? null,
                model || null,
                collection_id,  
                version_id,
            ]
        );

        // Vraćanje odgovora s uspješno kreiranim proizvodom
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
            (SELECT p.*, b.name AS brand_name, c.name AS collection_name, v.name AS version_name
             FROM products p
             JOIN brands b ON p.brand_id = b.id
             LEFT JOIN collections c ON p.collection_id = c.id
             LEFT JOIN versions v ON p.version_id = v.id
             WHERE p.tag = $1
             LIMIT 4)
             
            UNION ALL
            
            (SELECT p.*, b.name AS brand_name, c.name AS collection_name, v.name AS version_name
             FROM products p
             JOIN brands b ON p.brand_id = b.id
             LEFT JOIN collections c ON p.collection_id = c.id
             LEFT JOIN versions v ON p.version_id = v.id
             WHERE p.tag = $2
             LIMIT 4)
             
            UNION ALL
            
            (SELECT p.*, b.name AS brand_name, c.name AS collection_name, v.name AS version_name
             FROM products p
             JOIN brands b ON p.brand_id = b.id
             LEFT JOIN collections c ON p.collection_id = c.id
             LEFT JOIN versions v ON p.version_id = v.id
             WHERE p.tag = $3
             LIMIT 4)
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
        const { id } = req.params;

        if (!/^\d+$/.test(id)) {
            return res.status(400).json({ success: false, message: "Invalid product IDdd" });
        }

        const result = await pool.query(`
            SELECT p.*, b.name AS brand_name, c.name AS collection_name, v.name AS version_name
            FROM products p
            JOIN brands b ON p.brand_id = b.id
            LEFT JOIN collections c ON p.collection_id = c.id 
            LEFT JOIN versions v ON p.version_id = v.id  
            WHERE p.id = $1
        `, [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.status(200).json({ success: true, data: result.rows[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getSimilarProducts = async (req, res) => {
    try {
        const { collection_id, id } = req.query; 

        const result = await pool.query(`
            SELECT p.*, b.name AS brand_name, c.name AS collection_name, v.name AS version_name
            FROM products p
            JOIN brands b ON p.brand_id = b.id
            LEFT JOIN collections c ON p.collection_id = c.id 
            LEFT JOIN versions v ON p.version_id = v.id  
            WHERE p.collection_id = $1 AND p.id != $2 
            LIMIT 4;
        `, [collection_id, id]); 


        /* 
            SELECT p.*, b.name AS brand_name, c.name AS collection_name, v.name AS version_name
            FROM products p
            JOIN brands b ON p.brand_id = b.id
            LEFT JOIN collections c ON p.collection_id = c.id 
            LEFT JOIN versions v ON p.version_id = v.id  
            WHERE collection_id = $1 
            LIMIT 4
        */
        if(result.rows.length === 0) {
            return res.status(404).json({ success: false, message: "Nema ti toga pajdo" })
        }

        res.status(200).json({success:true, data: result.rows})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}