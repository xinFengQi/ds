/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil/router";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface ComopoentGiteeMenu {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLComopoentGiteeMenuElement extends Components.ComopoentGiteeMenu, HTMLStencilElement {
    }
    var HTMLComopoentGiteeMenuElement: {
        prototype: HTMLComopoentGiteeMenuElement;
        new (): HTMLComopoentGiteeMenuElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "comopoent-gitee-menu": HTMLComopoentGiteeMenuElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface ComopoentGiteeMenu {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "comopoent-gitee-menu": ComopoentGiteeMenu;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "comopoent-gitee-menu": LocalJSX.ComopoentGiteeMenu & JSXBase.HTMLAttributes<HTMLComopoentGiteeMenuElement>;
        }
    }
}