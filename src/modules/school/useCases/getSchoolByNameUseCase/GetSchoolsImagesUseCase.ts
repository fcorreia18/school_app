import Image from "../../entities/Image";

type IResponse = {
    id: string;
    url: string;
};
export default {
    render(image: Image): IResponse {
        return {
            id: image.id,
            url: `localhost:8000/tmp/schools_images/${image.path}`,
        };
    },
    renderMany(images: Image[]): IResponse[] {
        return images.map((image) => this.render(image));
    },
};
