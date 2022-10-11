import React, { useState } from "react";
import map from "../utils/map.svg";
import socialIcons from "../utils/social_icons.svg";
import happyFooterPinkFace from "../utils/happy_pink_face_footer.svg";
import happyYellowFaceFooter from "../utils/happy_yellow_face_footer.svg";
import happyGreenFaceFooter from "../utils/happy_green_face_footer.svg";
import happyYellowFaceHeader from "../utils/happy_yellow_face_header.svg";
import happyFacesMap from "../utils/happy_faces_map.svg";
import { sendEmail } from "../services/rest/emailService";

function ReachUs() {
    const [formulario, setFormulario] = useState({
        email: "",
        name: "",
        message: "",
    });

    async function send() {
        console.log(formulario.email, formulario.message, formulario.name)
        await sendEmail(formulario)
    }

    return (
        <div className="h-screen w-screen overflow-hidden">
            <div className="absolute h-20 w-22 ml-8">
                <img src={happyYellowFaceHeader} alt="map" height="100%" width="100%" />
            </div>
            <div className="flex container-main">
                <div className="mr-24">
                    <div className="font-normal text-7xl">
                        Reach out to us!
                    </div>
                    <div>
                        <input type="text" name="name" placeholder="Your name*" className="pl-12 h-24 w-109 border-solid border-1 rounded-lg mb-2 border-grey" onChange={(e) => setFormulario({ ...formulario, name: e.target.value })} value={formulario.name} />
                    </div>
                    <div>
                        <input type="text" name="email" placeholder="Your email*" className="pl-12 h-24 w-109 border-solid border-1 rounded-lg mb-2 border-grey" onChange={(e) => setFormulario({ ...formulario, email: e.target.value })} value={formulario.email} />
                    </div>
                    <div>
                        <textarea name="message" placeholder="Your message*" className="pl-12 pt-8 h-48 w-109 border-solid border-1 rounded-lg border-grey" onChange={(e) => setFormulario({ ...formulario, message: e.target.value })} value={formulario.message}>

                        </textarea>
                    </div>
                    <div className="button-submit h-18 w-51 rounded-500">
                        <button type="submit" className="h-full w-full text-white" onClick={send}> Send message</button>
                    </div>

                </div>
                <div>

                    <div className="h-72 w-82 absolute mt-72">
                        <img src={happyFacesMap} alt="map" height="100%" width="100%" />

                    </div>
                    <div>
                        <img src={map} alt="map" style={{ height: 550, width: 600 }} />
                    </div>

                </div>
            </div>
            <div className="flex justify-between footer">
                <div className="flex">
                    <img src={happyFooterPinkFace} alt="happyFace" style={{ height: 208, width: 214 }} />
                    <img src={socialIcons} alt="happyFace" style={{ height: 200, width: 147 }} />
                </div>
                <div>
                    <img src={happyGreenFaceFooter} alt="happyFace" style={{ height: 97, width: 78 }} />
                    <img src={happyYellowFaceFooter} alt="happyFace" style={{ height: 85, width: 88 }} />
                </div>
            </div>
        </div>
    )
}


export default ReachUs;