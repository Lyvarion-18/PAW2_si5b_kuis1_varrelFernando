const museumModel = require("../models/museumModel");

function getAllCollections(req, res, next) {
    try {
        const { periode } = req.query;

        const collections = periode
            ? museumModel.getCollectionsByPeriode(periode)
            : museumModel.getAllCollections();

        res.status(200).json({
            status: "success",
            data: collections
        });
    } catch (error) {
        next(error);
    }
}

function getCollectionById(req, res, next) {
    try {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            const error = new Error("ID harus berupa angka");
            error.status = 400;
            throw error;
        }

        const collection = museumModel.getCollectionById(id);

        if (!collection) {
            const error = new Error("Koleksi tidak ditemukan");
            error.status = 404;
            throw error;
        }

        res.status(200).json({
            status: "success",
            data: collection
        });
    } catch (error) {
        next(error);
    }
}

function createCollection(req, res, next) {
    try {
        const {
            namaKoleksi,
            kategori,
            periode,
            asalDaerah,
            tahunDitemukan
        } = req.body;

        if (!namaKoleksi || !kategori || !periode) {
            const error = new Error(
                "namaKoleksi, kategori, dan periode wajib diisi"
            );
            error.status = 400;
            throw error;
        }

        const newCollection = museumModel.addCollection({
            namaKoleksi,
            kategori,
            periode,
            asalDaerah,
            tahunDitemukan
        });

        res.status(201).json({
            status: "success",
            data: newCollection
        });
    } catch (error) {
        next(error);
    }
}

function updateCollection(req, res, next) {
    try {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            const error = new Error("ID harus berupa angka");
            error.status = 400;
            throw error;
        }

        const {
            namaKoleksi,
            kategori,
            periode,
            asalDaerah,
            tahunDitemukan
        } = req.body;

        if (!namaKoleksi || !kategori || !periode) {
            const error = new Error(
                "namaKoleksi, kategori, dan periode wajib diisi"
            );
            error.status = 400;
            throw error;
        }

        const updatedCollection = museumModel.updateCollection(id, {
            namaKoleksi,
            kategori,
            periode,
            asalDaerah,
            tahunDitemukan
        });

        if (!updatedCollection) {
            const error = new Error("Koleksi tidak ditemukan");
            error.status = 404;
            throw error;
        }

        res.status(200).json({
            status: "success",
            data: updatedCollection
        });
    } catch (error) {
        next(error);
    }
}

function deleteCollection(req, res, next) {
    try {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            const error = new Error("ID harus berupa angka");
            error.status = 400;
            throw error;
        }

        const deleted = museumModel.deleteCollection(id);

        if (!deleted) {
            const error = new Error("Koleksi tidak ditemukan");
            error.status = 404;
            throw error;
        }

        res.status(204).end();
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllCollections,
    getCollectionById,
    createCollection,
    updateCollection,
    deleteCollection
};