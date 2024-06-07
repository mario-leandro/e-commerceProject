import "dotenv";

const getAllProducts = async () => {
    try {
        const response = await fetch(process.env.API_URL);
        const data = await response.json();

        if (!data) throw "Problema de requisição com a API.";
        return data;
    } catch (error) {
        console.error(error);
    }
}

const getProductLimited = async (limit) => {
    try {
        const response = await fetch(process.env.API_URL + `?limit=${limit}`);
        const data = await response.json();

        if (!data) throw "Problema de requisição com a API.";
        return data;
    } catch (error) {
        console.error(error);
    }
}

const getProductById = async (id) => {
    try {
        const response = await fetch(process.env.API_URL + `/${id}`);
        const data = await response.json();

        if (!data) throw "Problema de requisição com a API.";
        return data;
    } catch (error) {
        console.error(error);
    }
}

const getProductByCategory = async (category) => {
    try {
        const response = await fetch(process.env.API_URL_CATEGORY + `/${category}`);
        const data = await response.json();

        if (!data) throw "Problema de requisição com a API.";
        return data;
    } catch (error) {
        console.error(error);
    }
}

const createProduct = async (product) => {
    try {
        const response = await fetch(process.env.API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });

        const data = await response.json();

        if (!data) throw "Problema de requisição com a API.";
        return data;
    } catch (error) {
        console.error(error);
    }
}

const updateProduct = async (id, product) => {
    try {
        const response = await fetch(process.env.API_URL + `/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });

        const data = await response.json();

        if (!data) throw "Problema de requisição com a API.";
        return data;
    } catch (error) {
        console.error(error);
    }
}

const deleteProduct = async (id) => {
    try {
        const response = await fetch(process.env.API_URL + `/${id}`, {
            method: "DELETE"
        });

        const data = await response.json();

        if (!data) throw "Problema de requisição com a API.";
        return data;
    } catch (error) {
        console.error(error);
    }
}

const UseApi = {
    getAllProducts,
    getProductLimited,
    getProductById,
    getProductByCategory,
    createProduct,
    updateProduct,
    deleteProduct
}

export default UseApi;