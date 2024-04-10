import React, { useState, useRef } from 'react';
import * as S from './styles';

const ImageUploadMock = () => {
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
    // Especifique o tipo do elemento que a ref está apontando
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    setImagePreviewUrl(reader.result);
                }
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreviewUrl(null);
        }
    };

    return (
        <S.Wrapper>
            <S.PhotoInput
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                ref={inputRef}
            />
            <S.CameraButton onClick={() => inputRef.current?.click()}>
                <img
                    src="/assets/Device_Camera_White.svg"
                    alt="home_icon"
                    width={24}
                    height={24}
                />
            </S.CameraButton>
            {imagePreviewUrl && (
                <S.Wrapper>
                    <S.Title>Image Preview</S.Title>
                    <img
                        src={imagePreviewUrl}
                        alt="Preview"
                        style={{ maxWidth: '100%' }}
                    />
                </S.Wrapper>
            )}
        </S.Wrapper>
    );
};

export default ImageUploadMock;
