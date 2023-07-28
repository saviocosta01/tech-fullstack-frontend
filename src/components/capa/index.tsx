import { CapaStyle } from "./style";
import {Avatar} from "@mui/material";

export const CapaProfile = () => {
  return (
    <CapaStyle>
      <div className="color-capa"></div>
      <div className="image-box">
      <Avatar src="/broken-image.jpg" variant="circular" style={{backgroundColor: '#000'}} className="foto-perfil"/>
        {/* <img
          className="foto-perfil"
          src="https://publicdomainvectors.org/tn_img/abstract-user-flat-4.webp"
        /> */}
        {/* <button onClick={() => setUpdateProfileImage(true)}>
          <MdOutlineAddAPhoto size="35px" />
        </button> */}
      </div>
    </CapaStyle>
  );
};
