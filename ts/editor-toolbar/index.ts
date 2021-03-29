import type { SvelteComponent } from "svelte";
import { checkNightMode } from "anki/nightmode";
import EditorToolbarSvelte from "./EditorToolbar.svelte";

import LabelButton from "./LabelButton.svelte";

import {
    boldButton,
    italicButton,
    underlineButton,
    superscriptButton,
    subscriptButton,
    eraserButton,
} from "./format";

import { forecolorButton, colorpickerButton } from "./color";

import { clozeButton, attachmentButton, micButton, etcButton } from "./extra";

const defaultButtons = [
    [
        { component: LabelButton, label: "Fields..." },
        { component: LabelButton, label: "Cards..." },
    ],
    [
        boldButton,
        italicButton,
        underlineButton,
        superscriptButton,
        subscriptButton,
        eraserButton,
    ],
    [forecolorButton, colorpickerButton],
    [clozeButton, attachmentButton, micButton, etcButton],
];

class EditorToolbar extends HTMLElement {
    component?: SvelteComponent;

    connectedCallback(): void {
        const nightMode = checkNightMode();

        this.component = new EditorToolbarSvelte({
            target: this,
            props: {
                nightMode,
                buttons: defaultButtons,
            },
        });
    }
}

customElements.define("anki-editor-toolbar", EditorToolbar);
