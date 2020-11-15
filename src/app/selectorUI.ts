import { useMobile, MobileInputData } from './mobile';

export const initDataId = "video-selector";
const formTitle = "Select Video to Play";

export const fields = {
    title: {
        id: "video-title",
        type: "info",
        value: {
            type: "text",
            content: "",
            style: {
                fontSize: 18,
                marginTop: 20,
            }
        },
        viewId: "row1",
    },
    synopsis: {
        id: "synopsis",
        type: "info",
        value: "",
        viewId: "row1"
    },
    previous: {
        id: "previousVideo",
        label: "Previous Video",
        type: "button",
        icon: "left",
        viewId: "row2"
    },
    next: {
        id: "nextVideo",
        label: "Next Video",
        type: "button",
        icon: "right",
        viewId: "row2",

    },
    play: {
        id: "videoPlayer",
        label: "Play",
        type: "button",
        icon: "select",
        viewId: "row3"
    }
};

const titleValue = (title: string) => {
    return { ...fields.title.value, content: title };
}
const getFields = (title: string, synopsis: string) => {
    return [
        { ...fields.title, value: titleValue(title) },
        { ...fields.synopsis, value: synopsis },
        fields.previous,
        fields.next,
        fields.play
    ];
};

export const useMobileSelector = (title: string, synopsis: string) => {
    return useMobile(formTitle, () => {
        return getFields(title, synopsis);
    }, '', '', '', initDataId);
};

export const sendUI = (mobile:MobileInputData,title:string, synopsis:string)=>{
    mobile.sendFormFields(title,getFields(title,synopsis),'','','',initDataId);
};

export const sendTitle = (mobile: MobileInputData, title: string) => {
    mobile.sendValue(fields.title.id, titleValue(title));
};

export const sendSynopsis = (mobile: MobileInputData, synopsis: string) => {
    mobile.sendValue(fields.synopsis.id, synopsis);
}