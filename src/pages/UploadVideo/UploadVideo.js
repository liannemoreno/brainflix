import '../UploadVideo/UploadVideo.scss';
import UploadVideoFrom from '../../components/UploadVideoForm/UploadVideoForm.js';
import { useState } from 'react';

function UploadVideo() {
    return (
        <>
            <h2> Upload Video</h2>
            <UploadVideoFrom />
        </>
    )
}
export default UploadVideo;