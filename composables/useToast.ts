import { Ref } from "nuxt/dist/app/compat/capi";

type ToastState = {
    message: string;
    shown: boolean;
};
  
export const useToast = () => {
    const state = useState<ToastState>("toast_state", () => ({
        message: "",
        shown: false,
    }));
    return {
        state: readonly(state),
        showToast: showToast(state),
        setShown: setShown(state),
    };
};

const showToast = (state: Ref<ToastState>) => {
    return (message:string) => {
        state.value.message = message;
        state.value.shown = true;
    };
};
const setShown = (state: Ref<ToastState>) => {
    return (shown:boolean) => {
        state.value.shown = shown;
    };
};
