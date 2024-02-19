import { ButtonStatus, ButtonStatusTitle } from "./Style"

export const HomeButton = ({
    textButton,
    clickButton = false,
    onPress,
}) => {
    return(
        <ButtonStatus clickButton={clickButton} onPress={onPress}>
            <ButtonStatusTitle clickButton={clickButton}>
                {textButton}
            </ButtonStatusTitle>
        </ButtonStatus>
    )
}