import Image from "../../entities/Image";

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `localhost:3333/uploads/${image.path}`,
        };
    },
    renderMany(images: Image[]) {
        return images.map((image) => this.render(image));
    },
};
