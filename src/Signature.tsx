import {PhotoSignatureProps} from "./App";
import TwitterLogo from "./assets/twitter.png";
import LinkedInLogo from "./assets/linkedin.png";
import FacebookLogo from "./assets/facebook.png";
import BehanceLogo from "./assets/behance.png"
import Logo from "./assets/Logo.png";

const Signature = (props: PhotoSignatureProps) => {
    return (
        <table cellPadding={0} cellSpacing={0} className={"signature"}>
            <tbody>
            <tr>
                <td rowSpan={5}>
                    <img
                        className={"main-image"}
                        src={props.photo === "no-photo" ? Logo : props.photo}
                        alt={""}
                    />
                </td>
                <td rowSpan={5}>
                    <div
                        className={"vertical-line"}
                    />
                </td>
                <td>{props.fullName}</td>
            </tr>
            <tr>
                <td colSpan={3}>{props.position}</td>
            </tr>
            <tr>
                <td colSpan={3}>Telephone: {props.phone}</td>
            </tr>
            <tr>
                <td colSpan={3}>Skype: {props.skype}</td>
            </tr>
            <tr>
                <td colSpan={3}>
                    <div className={"social-logos-frame"}>
                        <a href={"https://twitter.com/"}>
                            <img src={"https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"} width={"32px"} height={"32px"} alt={""}/>
                        </a>
                        <a href={"https://www.linkedin.com/"}>
                            <img src={"https://www.freepnglogos.com/uploads/linkedin-social-media-logo-7.png"} width={"32px"} height={"32px"} alt={""}/>
                        </a>
                        <a href={"https://www.facebook.com/"}>
                            <img src={"https://www.freepnglogos.com/uploads/facebook-logo-14.png"} width={"32px"} height={"32px"} alt={""}/>
                        </a>
                        <a href={"https://www.behance.net/"}>
                            <img src={"https://seeklogo.com/images/B/behance-icon-logo-287E5C6D93-seeklogo.com.png"} width={"32px"} height={"32px"} alt={""}/>
                        </a>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    );
};

export default Signature;
