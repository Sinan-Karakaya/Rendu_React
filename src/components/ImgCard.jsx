import React from "react";

function ImgCard( { image } ) {

    return (
        <div className="w-full bg-slate-200">
            <img src={image.webformatURL} alt="" className='w-full h-auto' />
            <p className="m-4 text-lg">Image by <strong>{image.user}</strong></p>
            <p className="m-4">Tags: <strong>{image.tags}</strong></p>
            <p className="m-4">Resolution: <strong>{image.imageHeight} x {image.imageWidth}</strong></p>
        </div>
    )

}

export default ImgCard;