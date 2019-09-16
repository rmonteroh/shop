import {createSelector} from 'reselect'

const selectDirectory = state => state.directory; // directory hace referencia a el nombre del reducer en el root-reducer


export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);