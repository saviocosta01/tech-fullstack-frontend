import { CapaStyle } from "./style";
import {Avatar} from "@mui/material";

export const CapaProfile = () => {
  return (
    <CapaStyle>
      <div className="color-capa"><img src="https://imgs.search.brave.com/e0r-u9sfz4WwCZzni-aYtfEeJ3dcF-UvFhI6vvl-BIY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZW1vdGlv/bmNhcmQuY29tLmJy/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzAzL2ZvdG8tZGUt/Y2FwYS5qcGc_cmVz/aXplPTY2MCwzNzEm/c3NsPTE" alt="" /></div>
      <div className="image-box">
      <Avatar src="/broken-image.jpg" variant="circular" style={{backgroundColor: '#000'}} className="foto-perfil"/>
      </div>
    </CapaStyle>
  );
};
