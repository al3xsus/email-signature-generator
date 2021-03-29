import {PhotoSignatureProps} from "./App";
import TwitterLogo from "./assets/twitter.png";
import LinkedInLogo from "./assets/linkedin.png";
import FacebookLogo from "./assets/facebook.png";
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
                            <img src={TwitterLogo} alt={""}/>
                        </a>
                        <a href={"https://www.linkedin.com/"}>
                            <img src={LinkedInLogo} alt={""}/>
                        </a>
                        <a href={"https://www.facebook.com/"}>
                            <img src={FacebookLogo} alt={""}/>
                        </a>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    );
};

export default Signature;
