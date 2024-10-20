export function formatFIO(first_name: string, last_name: string, patronymic_name: string) {
    return `${last_name} ${first_name.charAt(0)}. ${patronymic_name.charAt(0)}.`
}