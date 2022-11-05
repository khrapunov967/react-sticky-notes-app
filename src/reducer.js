export default (state, action) => {
    switch(action.type) {

        case "showModal":
            return {
                ...state,
                isModalVisible: true
            };

        case "hideModal":
            return {
                ...state,
                isModalVisible: false,
                noteContent: "",
                noteTitle: ""
            };

        case "changeNoteTitleHandler":
            return {
                ...state,
                noteTitle: action.payload
            };

        case "changeNoteContentHandler":
            return {
                ...state,
                noteContent: action.payload
            };

        case "changeSearchQueryHandler":
            return {
                ...state,
                searchQuery: action.payload
            };

        case "clearSearchQuery":
            return {
                ...state,
                searchQuery: ""
            };

        case "createNote":
            if (state.noteContent.trim() && state.noteTitle.trim()) {
                const newNote = {
                    id: Date.now(),
                    noteTitle: state.noteTitle,
                    noteContent: state.noteContent
                };

                return {
                    ...state,
                    notes: [...state.notes, newNote],
                    isModalVisible: false,
                    noteContent: "",
                    noteTitle: ""
                }
            }

        case "removeNote":
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload)
            };

        default: 
            return state;
    }
}