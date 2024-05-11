declare interface Brand {
    id: string;
    name: string;
    description: string;
}

declare interface WatchProps {
    data: {
        id: string;
        name: string;
        price: number;
        description: string;
        link: string;
        boxMaterial: string;
        boxSize: string;
        braceletMaterial: string;
        dialColor: string;
        movimentType: string;
        picture: string[];
        releaseYear: number;
        extras: string;
        originCountry: string;
        brandId: string;
        createdAt: string;
        Brand: Brand
    }
} 

declare interface WatchResponseProps {
    id: string;
    name: string;
    price: number;
    description: string;
    link: string;
    boxMaterial: string;
    boxSize: string;
    braceletMaterial: string;
    dialColor: string;
    movimentType: string;
    picture: string[];
    releaseYear: number;
    extras: string;
    originCountry: string;
    brandId: string;
    createdAt: string;
    Brand?: Brand;
}