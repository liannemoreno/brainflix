import '../UploadVideo/UploadVideo.scss';
import UploadVideoFrom from '../../components/UploadVideoForm/UploadVideoForm.js';

function UploadVideo() {
    return (
        <>
            <h2 className="upload-video__title"> Upload Video</h2>
            <UploadVideoFrom />
        </>
    )
}
export default UploadVideo;