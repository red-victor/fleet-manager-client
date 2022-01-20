import { useState } from "react";
import BlankUserImg from "../../../../assets/media/avatars/blank.png";

const AvatarInput = ({userAvatar, className}) => {
    const [avatar, setAvatar] = useState(userAvatar);
    return (
        <div className={className ? className : undefined}>
            <label className="d-block fw-bold fs-6 mb-5">Avatar</label>
            <div
                className={`image-input image-input-outline ${!avatar && 'image-input-empty'}`}
                data-kt-image-input="true"
                style={{
                    backgroundImage: `url(${BlankUserImg})`
                }}
            >
                <div
                    className="image-input-wrapper w-125px h-125px"
                    style={{
                        backgroundImage: avatar ? `url(${avatar})` : 'none'
                    }}
                />
                <label
                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                    data-kt-image-input-action="change"
                    data-bs-toggle="tooltip"
                    title="Change avatar"
                >
                    <i className="bi bi-pencil-fill fs-7" />
                    <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                    <input type="hidden" name="avatar_remove" />
                </label>
                <span
                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                    data-kt-image-input-action="cancel"
                    data-bs-toggle="tooltip"
                    title="Cancel avatar"
                >
                    <i className="bi bi-x fs-2" />
                </span>
                <span
                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                    data-kt-image-input-action="remove"
                    data-bs-toggle="tooltip"
                    title="Remove avatar"
                    onClick={() => setAvatar(null)}
                >
                    <i className="bi bi-x fs-2" />
                </span>
            </div>
            <div className="form-text">
                Allowed file types: png, jpg, jpeg.
            </div>
        </div>
    )
}

export default AvatarInput;