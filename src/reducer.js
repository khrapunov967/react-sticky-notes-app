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
                noteContent: ""
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
            if (state.noteContent.trim()) {
                const newNote = {
                    id: Date.now(),
                    noteTitle: "Title",
                    noteContent: state.noteContent
                };

                return {
                    ...state,
                    notes: [...state.notes, newNote],
                    isModalVisible: false,
                    noteContent: ""
                }
            }

        default: 
            return state;
    }
}