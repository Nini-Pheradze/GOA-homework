import express, { Request, Response } from "express";
import { randomUUID } from "crypto";

// ==================== ტიპები ====================

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    createdAt: string;
    updatedAt: string;
}

interface CreateProductDto {
    name: string;
    description?: string;
    price: number;
    quantity: number;
}

interface UpdateProductDto {
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
}

let products: Product[] = [];


const app = express();
const PORT = 3000;

app.use(express.json());


app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Product CRUD API Works",
        endpoints: {
        "GET /api/products": "Getting all products!",
        "GET /api/products/:id": "Getting one product by ID!",
        "POST /api/products": "Creating new product!",
        "PUT /api/products/:id": "Updating product by ID!",
        "DELETE /api/products/:id": "Deleting product by ID!",
        },
    });
});


app.get("/api/products", (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        count: products.length,
        data: products,
    });
});


app.get("/api/products/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        res.status(404).json({
        success: false,
        message: `Product by thid ID "${id}" cannot be found!`,
        });
        return;
    }

    res.status(200).json({ success: true, data: product });
});


app.post("/api/products", (req: Request, res: Response) => {
    const { name, description, price, quantity }: CreateProductDto = req.body;

    if (!name || price === undefined || quantity === undefined) {
        res.status(400).json({
        success: false,
        message: "Must be filled by 'name', 'price' and 'quantity'!",
        });
        return;
    }

    if (typeof price !== "number" || price < 0) {
        res.status(400).json({ success: false, message: "'price' must positive number!" });
        return;
    }

    if (typeof quantity !== "number" || quantity < 0) {
        res.status(400).json({ success: false, message: "'quantity' must positive number!" });
        return;
    }

    const now = new Date().toISOString();
    const newProduct: Product = {
        id: randomUUID(),
        name,
        description: description ?? "",
        price,
        quantity,
        createdAt: now,
        updatedAt: now,
    };

    products.push(newProduct);

    res.status(201).json({
        success: true,
        message: "Product created successfully!",
        data: newProduct,
    });
});


app.put("/api/products/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const updateData: UpdateProductDto = req.body;

    const product = products.find((p) => p.id === id);

    if (!product) {
        res.status(404).json({
        success: false,
        message: `Product by thid ID "${id}" cannot be found!`,
        });
        return;
    }

    if (
        updateData.price !== undefined &&
        (typeof updateData.price !== "number" || updateData.price < 0)
    ) {
        res.status(400).json({ success: false, message: "'price' must be positive number" });
        return;
    }

    if (
        updateData.quantity !== undefined &&
        (typeof updateData.quantity !== "number" || updateData.quantity < 0)
    ) {
        res.status(400).json({ success: false, message: "'quantity' must positive number!" });
        return;
    }

    if (updateData.name !== undefined) product.name = updateData.name;
    if (updateData.description !== undefined) product.description = updateData.description;
    if (updateData.price !== undefined) product.price = updateData.price;
    if (updateData.quantity !== undefined) product.quantity = updateData.quantity;
    product.updatedAt = new Date().toISOString();

    res.status(200).json({
        success: true,
        message: "Product updated successfully!",
        data: product,
    });
});


app.delete("/api/products/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
        res.status(404).json({
        success: false,
        message: `Product by thid ID "${id}" cannot be found!`,
        });
        return;
    }

    products.splice(index, 1);

    res.status(200).json({
        success: true,
        message: "Product deleted successfully!",
    });
    });

    // 404 handler
    app.use((req: Request, res: Response) => {
    res.status(404).json({ success: false, message: "Requested page doesn't load." });
    });

    app.listen(PORT, () => {
    console.log(`Server is running: http://localhost:${PORT}`);
});