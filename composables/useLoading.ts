import { Ref } from "nuxt/dist/app/compat/capi";

type LoadingState = {
    isLoading: boolean;
};
  
export const useLoading = () => {
    const state = useState<LoadingState>("loading_state", () => ({
        isLoading: false,
    }));
    return {
        state: readonly(state),
        setLoading: setLoading(state),
    };
};

const setLoading = (state: Ref<LoadingState>) => {
    return (isLoading: boolean) => (state.value.isLoading = isLoading);
};