import React, { useState } from 'react';
import * as S from './styles';

const ImageUploadMock = () => {
    // Specify the type for the state as string or null
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // Check if reader.result is a string before setting it to state
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
            <S.InputContainer>
                <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                />
            </S.InputContainer>
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
