import React, { useCallback, useEffect, useState } from 'react'

const ImgProfile = ({ path, placeholder, loadError, ...props }) => {
    const [img, initImg] = useState(placeholder || path);

    const onLoad = useCallback(() => {
        initImg(path);
      }, [path]);

      const onError = useCallback(() => {
        initImg(loadError || placeholder);
      }, [loadError, placeholder]);

      useEffect(() => {
        const imageObjt = new Image();
        imageObjt.src = path;
        imageObjt.addEventListener("load", onLoad);
        imageObjt.addEventListener("error", onError);
        return () => {
          imageObjt.removeEventListener("load", onLoad);
          imageObjt.removeEventListener("error", onError);
        };
      }, [path, onLoad, onError]);

  return <img {...props} alt={img} src={img} />;
}

export default ImgProfile