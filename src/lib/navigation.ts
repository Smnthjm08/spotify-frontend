export let navigate = (p0?: string, p1?: { state: { redirectUrl: string; }; }) =>{}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setNavigate = (navigateFn: any) => {
    navigate = navigateFn;
}