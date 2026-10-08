let collections = [
    {
        id: 1,
        namaKoleksi: "Arca Buddha Bukit Siguntang",
        kategori: "arca",
        periode: "Sriwijaya",
        asalDaerah: "Palembang",
        tahunDitemukan: 1920
    },
    {
        id: 2,
        namaKoleksi: "Prasasti Kedukan Bukit",
        kategori: "prasasti",
        periode: "Sriwijaya",
        asalDaerah: "Palembang",
        tahunDitemukan: 1920
    },
    {
        id: 3,
        namaKoleksi: "Kendi Keramik Kuno",
        kategori: "keramik",
        periode: "Kolonial",
        asalDaerah: "Palembang",
        tahunDitemukan: 1955
    }
];

let nextId = 4;

function getAllCollections() {
    return collections;
}

function getCollectionById(id) {
    return collections.find((item) => item.id === id);
}

function getCollectionsByPeriode(periode) {
    return collections.filter(
        (item) => item.periode.toLowerCase() === periode.toLowerCase()
    );
}

function addCollection(data) {
    const newCollection = {
        id: nextId,
        namaKoleksi: data.namaKoleksi,
        kategori: data.kategori,
        periode: data.periode,
        asalDaerah: data.asalDaerah,
        tahunDitemukan: data.tahunDitemukan
    };

    collections.push(newCollection);
    nextId++;

    return newCollection;
}

function updateCollection(id, data) {
    const index = collections.findIndex((item) => item.id === id);

    if (index === -1) {
        return null;
    }

    const updatedCollection = {
        id: id,
        namaKoleksi: data.namaKoleksi,
        kategori: data.kategori,
        periode: data.periode,
        asalDaerah: data.asalDaerah,
        tahunDitemukan: data.tahunDitemukan
    };

    collections[index] = updatedCollection;

    return updatedCollection;
}

function deleteCollection(id) {
    const index = collections.findIndex((item) => item.id === id);

    if (index === -1) {
        return false;
    }

    collections.splice(index, 1);

    return true;
}

module.exports = {
    getAllCollections,
    getCollectionById,
    getCollectionsByPeriode,
    addCollection,
    updateCollection,
    deleteCollection
};