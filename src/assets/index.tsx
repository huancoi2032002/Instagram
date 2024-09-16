import React from "react";
import { SvgProps } from "~/store/Svg/SvgProps";

export const VectorX: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label="Đóng"
    className={className}
    fill="currentColor"
    height="16"
    role="img"
    viewBox="0 0 24 24"
    width="16"
  >
    <title>Đóng</title>
    <polyline
      className={className}
      fill="none"
      points="20.643 3.357 12 12 3.353 20.647"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    ></polyline>
    <line
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      x1="20.649"
      x2="3.354"
      y1="20.649"
      y2="3.354"
    ></line>
  </svg>
);

export const SearchIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label="Tìm kiếm"
    className={className}
    fill="currentColor"
    height="16"
    role="img"
    viewBox="0 0 24 24"
    width="16"
  >
    <title>Tìm kiếm</title>
    <path
      className={className}
      d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></path>
    <line
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      x1="16.511"
      x2="22"
      y1="16.511"
      y2="22"
    ></line>
  </svg>
);

export const SavedIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label="Saved"
    className={className}
    fill="currentColor"
    height="18"
    role="img"
    viewBox="0 0 24 24"
    width="18"
  >
    <title>Saved</title>
    <polygon
      className={className}
      fill=""
      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></polygon>
  </svg>
);

export const MediaIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label="Biểu tượng thể hiện file phương tiện, chẳng hạn như hình ảnh hoặc video"
    className={className}
    fill="currentColor"
    height="77"
    role="img"
    viewBox="0 0 97.6 77.3"
    width="96"
  >
    <title>
      Biểu tượng thể hiện file phương tiện, chẳng hạn như hình ảnh hoặc video
    </title>
    <path
      d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
      fill="currentColor"
    ></path>
    <path
      d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
      fill="currentColor"
    ></path>
    <path
      d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
      fill="currentColor"
    ></path>
  </svg>
);
export const CutIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label="Chọn kích thước cắt"
    className={className}
    fill="currentColor"
    height="16"
    role="img"
    viewBox="0 0 24 24"
    width="16"
  >
    <title>Chọn kích thước cắt</title>
    <path d="M10 20H4v-6a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1h7a1 1 0 0 0 0-2ZM20.999 2H14a1 1 0 0 0 0 2h5.999v6a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Z"></path>
  </svg>
);
export const ZoomIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label="Chọn mức thu phóng"
    className={className}
    fill="currentColor"
    height="16"
    role="img"
    viewBox="0 0 24 24"
    width="16"
  >
    <title>Chọn mức thu phóng</title>
    <path d="m22.707 21.293-4.825-4.825a9.519 9.519 0 1 0-1.414 1.414l4.825 4.825a1 1 0 0 0 1.414-1.414ZM10.5 18.001a7.5 7.5 0 1 1 7.5-7.5 7.509 7.509 0 0 1-7.5 7.5Zm3.5-8.5h-2.5v-2.5a1 1 0 1 0-2 0v2.5H7a1 1 0 1 0 0 2h2.5v2.5a1 1 0 0 0 2 0v-2.5H14a1 1 0 0 0 0-2Z"></path>
  </svg>
);
export const MediaFileIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label="Mở thư viện file phương tiện"
    className={className}
    fill="currentColor"
    height="16"
    role="img"
    viewBox="0 0 24 24"
    width="16"
  >
    <title>Mở thư viện file phương tiện</title>
    <path
      d="M19 15V5a4.004 4.004 0 0 0-4-4H5a4.004 4.004 0 0 0-4 4v10a4.004 4.004 0 0 0 4 4h10a4.004 4.004 0 0 0 4-4ZM3 15V5a2.002 2.002 0 0 1 2-2h10a2.002 2.002 0 0 1 2 2v10a2.002 2.002 0 0 1-2 2H5a2.002 2.002 0 0 1-2-2Zm18.862-8.773A.501.501 0 0 0 21 6.57v8.431a6 6 0 0 1-6 6H6.58a.504.504 0 0 0-.35.863A3.944 3.944 0 0 0 9 23h6a8 8 0 0 0 8-8V9a3.95 3.95 0 0 0-1.138-2.773Z"
      fillRule="evenodd"
    ></path>
  </svg>
);
export const PrevIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label="Mũi tên trái"
    className={className}
    fill="currentColor"
    height="16"
    role="img"
    viewBox="0 0 24 24"
    width="16"
  >
    <title>Mũi tên trái</title>
    <polyline
      fill="none"
      points="16.502 3 7.498 12 16.502 21"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></polyline>
  </svg>
);
export const NextIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label="Mũi tên phải"
    className={className}
    fill="currentColor"
    height="16"
    role="img"
    viewBox="0 0 24 24"
    width="16"
  >
    <title>Mũi tên phải</title>
    <polyline
      fill="none"
      points="8 3 17.004 12 8 21"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></polyline>
  </svg>
);

export const EmojisIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label="Biểu tượng cảm xúc"
    className={className}
    fill="currentColor"
    height="20"
    role="img"
    viewBox="0 0 24 24"
    width="20"
  >
    <title>Biểu tượng cảm xúc</title>
    <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
  </svg>
);
export const MapIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label="Thêm vị trí"
    className={className}
    fill="currentColor"
    height="16"
    role="img"
    viewBox="0 0 24 24"
    width="16"
  >
    <title>Thêm vị trí</title>
    <path d="M12.053 8.105a1.604 1.604 0 1 0 1.604 1.604 1.604 1.604 0 0 0-1.604-1.604Zm0-7.105a8.684 8.684 0 0 0-8.708 8.66c0 5.699 6.14 11.495 8.108 13.123a.939.939 0 0 0 1.2 0c1.969-1.628 8.109-7.424 8.109-13.123A8.684 8.684 0 0 0 12.053 1Zm0 19.662C9.29 18.198 5.345 13.645 5.345 9.66a6.709 6.709 0 0 1 13.417 0c0 3.985-3.944 8.538-6.709 11.002Z"></path>
  </svg>
);
export const StaffIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label="Thêm cộng tác viên"
    className={className}
    fill="currentColor"
    height="16"
    role="img"
    viewBox="0 0 24 24"
    width="16"
  >
    <title>Thêm cộng tác viên</title>
    <path d="M21 10a1 1 0 0 0-1 1v9c0 .932-.643 1.71-1.507 1.931C18.429 19.203 16.199 17 13.455 17H8.55c-2.745 0-4.974 2.204-5.037 4.933A1.999 1.999 0 0 1 2 20V6c0-1.103.897-2 2-2h9a1 1 0 1 0 0-2H4C1.794 2 0 3.794 0 6v14c0 2.206 1.794 4 4 4h14c2.206 0 4-1.794 4-4v-9a1 1 0 0 0-1-1zM8.549 19h4.906a3.05 3.05 0 0 1 3.045 3H5.505a3.05 3.05 0 0 1 3.044-3z"></path>
    <path d="M6.51 11.002c0 2.481 2.02 4.5 4.502 4.5 2.48 0 4.499-2.019 4.499-4.5s-2.019-4.5-4.5-4.5a4.506 4.506 0 0 0-4.5 4.5zm7 0c0 1.378-1.12 2.5-2.498 2.5-1.38 0-2.501-1.122-2.501-2.5s1.122-2.5 2.5-2.5a2.502 2.502 0 0 1 2.5 2.5zM23.001 3.002h-2.004V1a1 1 0 1 0-2 0v2.002H17a1 1 0 1 0 0 2h1.998v2.003a1 1 0 1 0 2 0V5.002h2.004a1 1 0 1 0 0-2z"></path>
  </svg>
);
export const DownArrowIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label="Biểu tượng mũi tên xuống"
    className={className}
    fill="currentColor"
    height="16"
    role="img"
    viewBox="0 0 24 24"
    width="16"
  >
    <title>Biểu tượng mũi tên xuống</title>
    <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
  </svg>
);
export const ArrowBackIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label="Quay lại"
    className={className}
    fill="currentColor"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <title>Quay lại</title>
    <line
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      x1="2.909"
      x2="22.001"
      y1="12.004"
      y2="12.004"
    ></line>
    <polyline
      fill="none"
      points="9.276 4.726 2.001 12.004 9.276 19.274"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></polyline>
  </svg>
);
export const PlusIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label="Biểu tượng dấu cộng"
    className={className}
    fill="currentColor"
    height="22"
    role="img"
    viewBox="0 0 24 24"
    width="22"
  >
    <title>Biểu tượng dấu cộng</title>
    <path d="M21 11.3h-8.2V3c0-.4-.3-.8-.8-.8s-.8.4-.8.8v8.2H3c-.4 0-.8.3-.8.8s.3.8.8.8h8.2V21c0 .4.3.8.8.8s.8-.3.8-.8v-8.2H21c.4 0 .8-.3.8-.8s-.4-.7-.8-.7z"></path>
  </svg>
);
export const PostIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label=""
    className={className}
    fill="currentColor"
    height="12"
    role="img"
    viewBox="0 0 24 24"
    width="12"
  >
    <title></title>
    <rect
      fill="none"
      height="18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      width="18"
      x="3"
      y="3"
    ></rect>
    <line
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      x1="9.015"
      x2="9.015"
      y1="3"
      y2="21"
    ></line>
    <line
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      x1="14.985"
      x2="14.985"
      y1="3"
      y2="21"
    ></line>
    <line
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      x1="21"
      x2="3"
      y1="9.015"
      y2="9.015"
    ></line>
    <line
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      x1="21"
      x2="3"
      y1="14.985"
      y2="14.985"
    ></line>
  </svg>
);
export const UserTagIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label=""
    className={className}
    fill="currentColor"
    height="12"
    role="img"
    viewBox="0 0 24 24"
    width="12"
  >
    <title></title>
    <path
      d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></path>
    <path
      d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></path>
    <circle
      cx="12.072"
      cy="11.075"
      fill="none"
      r="3.556"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></circle>
  </svg>
);
export const CameraIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label="Khi bạn chia sẻ ảnh, ảnh sẽ xuất hiện trên trang cá nhân của bạn."
    className={className}
    fill="currentColor"
    height="62"
    role="img"
    viewBox="0 0 96 96"
    width="62"
  >
    <title>
      Khi bạn chia sẻ ảnh, ảnh sẽ xuất hiện trên trang cá nhân của bạn.
    </title>
    <circle
      cx="48"
      cy="48"
      fill="none"
      r="47"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeWidth="2"
    ></circle>
    <ellipse
      cx="48.002"
      cy="49.524"
      fill="none"
      rx="10.444"
      ry="10.476"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="2.095"
    ></ellipse>
    <path
      d="M63.994 69A8.02 8.02 0 0 0 72 60.968V39.456a8.023 8.023 0 0 0-8.01-8.035h-1.749a4.953 4.953 0 0 1-4.591-3.242C56.61 25.696 54.859 25 52.469 25h-8.983c-2.39 0-4.141.695-5.181 3.178a4.954 4.954 0 0 1-4.592 3.242H32.01a8.024 8.024 0 0 0-8.012 8.035v21.512A8.02 8.02 0 0 0 32.007 69Z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="2"
    ></path>
  </svg>
);
export const LoveIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label="Thích"
    className={className}
    fill="currentColor"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <title>Thích</title>
    <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
  </svg>
);
export const FavouriteIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label="Bỏ thích"
    className={className}
    fill="currentColor"
    height="24"
    role="img"
    viewBox="0 0 48 48"
    width="24"
  >
    <title>Bỏ thích</title>
    <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
  </svg>
);
export const CommentIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label="Bình luận"
    className={className}
    fill="currentColor"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <title>Bình luận</title>
    <path
      className={className}
      d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="2"
    ></path>
  </svg>
);

export const OtherOptionsIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label="Lựa chọn khác"
    className={className}
    fill="currentColor"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <title>Lựa chọn khác</title>
    <circle cx="12" cy="12" r="1.5"></circle>
    <circle cx="6" cy="12" r="1.5"></circle>
    <circle cx="18" cy="12" r="1.5"></circle>
  </svg>
);
export const ShareIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label="Chia sẻ"
    className={className}
    fill="currentColor"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <title>Chia sẻ</title>
    <line
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="2"
      x1="22"
      x2="9.218"
      y1="3"
      y2="10.083"
    ></line>
    <polygon
      fill="none"
      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="2"
    ></polygon>
  </svg>
);

export const UserIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label=""
    className={className}
    fill="currentColor"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <title></title>
    <circle
      cx="12.004"
      cy="12.004"
      fill="none"
      r="10.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    ></circle>
    <path
      d="M18.793 20.014a6.08 6.08 0 0 0-1.778-2.447 3.991 3.991 0 0 0-2.386-.791H9.38a3.994 3.994 0 0 0-2.386.791 6.09 6.09 0 0 0-1.779 2.447"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    ></path>
    <circle
      cx="12.006"
      cy="9.718"
      fill="none"
      r="4.109"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    ></circle>
  </svg>
);

export const BellIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label=""
    className={className}
    fill="currentColor"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <title></title>
    <path d="m21.306 14.019-.484-.852A6.358 6.358 0 0 1 20 9.997a7.953 7.953 0 0 0-4.745-7.302 3.971 3.971 0 0 0-6.51.002 7.95 7.95 0 0 0-4.74 7.323 6.337 6.337 0 0 1-.83 3.175l-.468.823a4.001 4.001 0 0 0 3.476 5.983h1.96a3.98 3.98 0 0 0 7.716 0h1.964a4.004 4.004 0 0 0 3.482-5.982Zm-9.304 6.983a1.993 1.993 0 0 1-1.722-1.001h3.444a1.993 1.993 0 0 1-1.722 1.001Zm7.554-3.997a1.986 1.986 0 0 1-1.732.996H6.184a2.002 2.002 0 0 1-1.74-2.993l.47-.822a8.337 8.337 0 0 0 1.093-4.174 5.962 5.962 0 0 1 3.781-5.584.996.996 0 0 0 .494-.426 1.976 1.976 0 0 1 3.439 0 1 1 0 0 0 .494.425 5.989 5.989 0 0 1 3.786 5.634 8.303 8.303 0 0 0 1.082 4.094l.483.852a1.984 1.984 0 0 1-.01 1.998Z"></path>
  </svg>
);

export const LockIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label=""
    className={className}
    fill="currentColor"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <title></title>
    <path
      d="M6.71 9.555h10.581a2.044 2.044 0 0 1 2.044 2.044v8.357a2.044 2.044 0 0 1-2.043 2.043H6.71a2.044 2.044 0 0 1-2.044-2.044V11.6A2.044 2.044 0 0 1 6.71 9.555Zm1.07 0V6.222a4.222 4.222 0 0 1 8.444 0v3.333"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></path>
  </svg>
);

export const StarIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label=""
    className={className}
    fill="currentColor"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <title></title>
    <path
      d="M12.001.504a11.5 11.5 0 1 0 11.5 11.5 11.513 11.513 0 0 0-11.5-11.5Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Zm4.691-11.82L13.91 9.35l-1.08-2.537a.893.893 0 0 0-1.66 0L10.086 9.35l-2.783.334a.963.963 0 0 0-.493 1.662l2.095 1.905-.606 2.837a.918.918 0 0 0 1.363 1.018l2.335-1.504 2.335 1.504a.918.918 0 0 0 1.363-1.018l-.605-2.837 2.094-1.905a.962.962 0 0 0-.493-1.662Z"
      fillRule="evenodd"
    ></path>
  </svg>
);

export const BanIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label=""
    className={className}
    fill="currentColor"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <title></title>
    <path d="M20.153 20.106A11.493 11.493 0 0 0 3.893 3.858c-.007.007-.016.009-.023.016s-.009.016-.015.023a11.493 11.493 0 0 0 16.247 16.26c.01-.009.022-.012.03-.02.01-.01.012-.022.021-.031Zm1.348-8.102a9.451 9.451 0 0 1-2.119 5.968L6.033 4.622a9.49 9.49 0 0 1 15.468 7.382Zm-19 0a9.451 9.451 0 0 1 2.118-5.967l13.35 13.35A9.49 9.49 0 0 1 2.5 12.003Z"></path>
  </svg>
);

export const HiddenIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label=""
    className={className}
    fill="currentColor"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <title></title>
    <path d="M1.545 13.386a1 1 0 0 0 .961-1.037Q2.5 12.174 2.5 12a9.514 9.514 0 0 1 .467-2.955 1 1 0 0 0-1.902-.62A11.53 11.53 0 0 0 .5 12c0 .142.002.283.008.425a1 1 0 0 0 .998.962.52.52 0 0 0 .04-.001Zm1.742 2.424a1 1 0 1 0-1.834.798 11.588 11.588 0 0 0 3.163 4.23A1 1 0 1 0 5.9 19.307a9.581 9.581 0 0 1-2.614-3.497Zm12.828 4.757a9.575 9.575 0 0 1-7.113.45 1 1 0 1 0-.629 1.899 11.545 11.545 0 0 0 8.607-.546 1 1 0 0 0-.865-1.803Zm4.69-1.176A11.495 11.495 0 0 0 12.002.5a1 1 0 0 0 0 2 9.492 9.492 0 0 1 7.382 15.469L2.207.793A1 1 0 0 0 .793 2.207l21 21a1 1 0 0 0 1.414-1.414Z"></path>
  </svg>
);

export const TagIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label=""
    className={className}
    fill="currentColor"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <title></title>
    <path
      d="M15.108 13.652a3.342 3.342 0 0 1-3.341 3.342h-.661a2.246 2.246 0 0 1-2.246-2.246v-.634a2.246 2.246 0 0 1 2.246-2.246h3.654"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    ></path>
    <path
      d="M17.521 22h-7.368a6.95 6.95 0 0 1-3.695-.642 4.356 4.356 0 0 1-1.813-1.812 6.96 6.96 0 0 1-.64-3.696v-7.7a6.964 6.964 0 0 1 .64-3.697 4.36 4.36 0 0 1 1.813-1.812A6.952 6.952 0 0 1 10.153 2h3.74a6.95 6.95 0 0 1 3.694.64 4.356 4.356 0 0 1 1.814 1.813 6.956 6.956 0 0 1 .64 3.696v6.464a2.38 2.38 0 0 1-2.38 2.38h-.13a2.423 2.423 0 0 1-2.422-2.422V9.019a2.471 2.471 0 0 0-2.47-2.471h-.994a2.471 2.471 0 0 0-2.47 2.47v.268"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    ></path>
  </svg>
);

export const ShareIcon2: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label=""
    className={className}
    fill="currentColor"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <title></title>
    <path d="M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z"></path>
  </svg>
);

export const LimitedAccountIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label=""
    className={className}
    fill="currentColor"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <title></title>
    <path
      d="M16.546 21.468A10.505 10.505 0 0 1 2.532 7.454m2.043-2.879a10.5 10.5 0 1 1 14.85 14.85"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></path>
    <path
      d="M8.027 8.028a4.266 4.266 0 1 1 5.53 5.529m-8.959 5.891a4.27 4.27 0 0 1 4.017-2.822h3.09"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></path>
    <line
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      x1="1.5"
      x2="22.5"
      y1="1.5"
      y2="22.5"
    ></line>
  </svg>
);

export const HiddenWordIcon: React.FC<SvgProps> = ({ className }) => (
  <svg
    aria-label=""
    className={className}
    fill="currentColor"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <title></title>
    <path d="M12.596 20.797h-2.178l-.009-.039-.815-3.735H4.7l-.825 3.774H1.673l.014-.061L5.744 3.203h2.78l.01.038Zm-7.449-5.823h4L7.134 5.835Zm11.813 6.123a3.198 3.198 0 0 1-3.274-3.473c0-1.881 1.011-3.056 3.185-3.698l1.8-.524c.754-.212 1.163-.486 1.163-1.327a1.732 1.732 0 0 0-1.95-1.775 1.746 1.746 0 0 0-1.9 1.9v.524h-2.048V12.2a3.61 3.61 0 0 1 3.949-3.75c2.578 0 3.998 1.323 3.998 3.724v8.623h-2v-1.569a2.998 2.998 0 0 1-2.923 1.87Zm2.874-6.427a2.914 2.914 0 0 1-1.26.577l-1.126.325a1.996 1.996 0 0 0-1.714 1.976 1.565 1.565 0 0 0 1.675 1.7c2.189 0 2.425-2.237 2.425-3.199Z"></path>
  </svg>
);
