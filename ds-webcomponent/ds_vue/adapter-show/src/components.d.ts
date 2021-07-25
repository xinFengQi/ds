/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface Ant2designHome {
    }
    interface Ant2vueButton {
    }
    interface Ant2vueIcon {
    }
    interface AppHome {
    }
    interface AppRoot {
    }
    interface CodeShow {
    }
}
declare global {
    interface HTMLAnt2designHomeElement extends Components.Ant2designHome, HTMLStencilElement {
    }
    var HTMLAnt2designHomeElement: {
        prototype: HTMLAnt2designHomeElement;
        new (): HTMLAnt2designHomeElement;
    };
    interface HTMLAnt2vueButtonElement extends Components.Ant2vueButton, HTMLStencilElement {
    }
    var HTMLAnt2vueButtonElement: {
        prototype: HTMLAnt2vueButtonElement;
        new (): HTMLAnt2vueButtonElement;
    };
    interface HTMLAnt2vueIconElement extends Components.Ant2vueIcon, HTMLStencilElement {
    }
    var HTMLAnt2vueIconElement: {
        prototype: HTMLAnt2vueIconElement;
        new (): HTMLAnt2vueIconElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLCodeShowElement extends Components.CodeShow, HTMLStencilElement {
    }
    var HTMLCodeShowElement: {
        prototype: HTMLCodeShowElement;
        new (): HTMLCodeShowElement;
    };
    interface HTMLElementTagNameMap {
        "ant2design-home": HTMLAnt2designHomeElement;
        "ant2vue-button": HTMLAnt2vueButtonElement;
        "ant2vue-icon": HTMLAnt2vueIconElement;
        "app-home": HTMLAppHomeElement;
        "app-root": HTMLAppRootElement;
        "code-show": HTMLCodeShowElement;
    }
}
declare namespace LocalJSX {
    interface Ant2designHome {
    }
    interface Ant2vueButton {
    }
    interface Ant2vueIcon {
    }
    interface AppHome {
    }
    interface AppRoot {
    }
    interface CodeShow {
        "onExpendChange"?: (event: CustomEvent<boolean>) => void;
    }
    interface IntrinsicElements {
        "ant2design-home": Ant2designHome;
        "ant2vue-button": Ant2vueButton;
        "ant2vue-icon": Ant2vueIcon;
        "app-home": AppHome;
        "app-root": AppRoot;
        "code-show": CodeShow;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ant2design-home": LocalJSX.Ant2designHome & JSXBase.HTMLAttributes<HTMLAnt2designHomeElement>;
            "ant2vue-button": LocalJSX.Ant2vueButton & JSXBase.HTMLAttributes<HTMLAnt2vueButtonElement>;
            "ant2vue-icon": LocalJSX.Ant2vueIcon & JSXBase.HTMLAttributes<HTMLAnt2vueIconElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "code-show": LocalJSX.CodeShow & JSXBase.HTMLAttributes<HTMLCodeShowElement>;
        }
    }
}
