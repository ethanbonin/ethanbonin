import projectsSkills from '../stories/projectSkills.json'

export const CARD_OPTIONS = {
    TMT: projectsSkills[0].project,
    RALLISTA: projectsSkills[1].project,
    SAFE_SPENDING: projectsSkills[2].project
}

export const initialState = { SELECTED: 0 };

export function convertCardState(CARD_OPTION) {
    switch (CARD_OPTION) {
        case CARD_OPTIONS.TMT:
            return 0;
        case CARD_OPTIONS.RALLISTA:
            return 1;
        case CARD_OPTIONS.SAFE_SPENDING:
            return 2;
        default:
            throw new Error("Not the correct convert options");
    }
}
