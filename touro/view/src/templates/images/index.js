import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function ItemWithoutThumbnailsDemo() {
    const [images, setImages] = useState([{itemImageSrc: "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80"}, {itemImageSrc: "https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg"}]);

   

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} className="rounded w-96 h-60 block" />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card">
            <Galleria value={images} numVisible={5} circular className='overflow-hidden'
                showThumbnails={false} showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}