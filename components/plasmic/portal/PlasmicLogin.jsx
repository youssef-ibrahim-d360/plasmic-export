// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: axW1Q7tQMGoC9jdxnXE57v
// Component: 6aNNUxKcPhSi
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicPageGuard as PlasmicPageGuard__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateOnMutateForSpec,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  initializeCodeComponentStates,
  set as $stateSet,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdPassword } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdPassword_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: axW1Q7tQMGoC9jdxnXE57v/projectcss
import sty from "./PlasmicLogin.module.css"; // plasmic-import: 6aNNUxKcPhSi/css

createPlasmicElementProxy;

export const PlasmicLogin__VariantProps = new Array();

export const PlasmicLogin__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLogin__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "input.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ``,
        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "passwordInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("value", AntdPassword_Helpers)
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <section className={classNames(projectcss.all, sty.section__dkHh8)}>
            <section className={classNames(projectcss.all, sty.section__yNxXa)}>
              <div
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__fVulL)}>
                  <AntdButton
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    className={classNames("__wab_instance", sty.button)}
                    onClick={async () => {
                      const $steps = {};
                      $steps["goToApiauthlogin"] = true
                        ? (() => {
                            const actionArgs = {
                              destination: "/api/auth/login"
                            };
                            return (({ destination }) => {
                              if (
                                typeof destination === "string" &&
                                destination.startsWith("#")
                              ) {
                                document
                                  .getElementById(destination.substr(1))
                                  .scrollIntoView({ behavior: "smooth" });
                              } else {
                                __nextRouter?.push(destination);
                              }
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["goToApiauthlogin"] != null &&
                        typeof $steps["goToApiauthlogin"] === "object" &&
                        typeof $steps["goToApiauthlogin"].then === "function"
                      ) {
                        $steps["goToApiauthlogin"] = await $steps[
                          "goToApiauthlogin"
                        ];
                      }
                    }}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__l87EV
                      )}
                    >
                      {"Login/signup"}
                    </div>
                  </AntdButton>
                  {false
                    ? (() => {
                        const child$Props = {
                          className: classNames("__wab_instance", sty.input),
                          onChange: async (...eventArgs) => {
                            generateStateOnChangePropForCodeComponents(
                              $state,
                              "value",
                              ["input", "value"],
                              AntdInput_Helpers
                            ).apply(null, eventArgs);
                            (async event => {
                              const $steps = {};
                              $steps["updateInputValue"] = true
                                ? (() => {
                                    const actionArgs = {
                                      variable: {
                                        objRoot: $state,
                                        variablePath: ["input", "value"]
                                      },
                                      operation: 0,
                                      value: $state.input.value
                                    };
                                    return (({
                                      variable,
                                      value,
                                      startIndex,
                                      deleteCount
                                    }) => {
                                      if (!variable) {
                                        return;
                                      }
                                      const { objRoot, variablePath } =
                                        variable;
                                      $stateSet(objRoot, variablePath, value);
                                      return value;
                                    })?.apply(null, [actionArgs]);
                                  })()
                                : undefined;
                              if (
                                $steps["updateInputValue"] != null &&
                                typeof $steps["updateInputValue"] ===
                                  "object" &&
                                typeof $steps["updateInputValue"].then ===
                                  "function"
                              ) {
                                $steps["updateInputValue"] = await $steps[
                                  "updateInputValue"
                                ];
                              }
                            }).apply(null, eventArgs);
                          },
                          placeholder: "Username or email",
                          value: generateStateValueProp($state, [
                            "input",
                            "value"
                          ])
                        };
                        initializeCodeComponentStates(
                          $state,
                          [
                            {
                              name: "value",
                              plasmicStateName: "input.value"
                            }
                          ],

                          [],
                          AntdInput_Helpers ?? {},
                          child$Props
                        );
                        return (
                          <AntdInput
                            data-plasmic-name={"input"}
                            data-plasmic-override={overrides.input}
                            {...child$Props}
                          />
                        );
                      })()
                    : null}
                  {false
                    ? (() => {
                        const child$Props = {
                          className: classNames(
                            "__wab_instance",
                            sty.passwordInput
                          ),
                          onChange: async (...eventArgs) => {
                            generateStateOnChangePropForCodeComponents(
                              $state,
                              "value",
                              ["passwordInput", "value"],
                              AntdPassword_Helpers
                            ).apply(null, eventArgs);
                            (async event => {
                              const $steps = {};
                              $steps["updatePasswordInputValue"] = true
                                ? (() => {
                                    const actionArgs = {
                                      variable: {
                                        objRoot: $state,
                                        variablePath: ["passwordInput", "value"]
                                      },
                                      operation: 0,
                                      value: $state.passwordInput.value
                                    };
                                    return (({
                                      variable,
                                      value,
                                      startIndex,
                                      deleteCount
                                    }) => {
                                      if (!variable) {
                                        return;
                                      }
                                      const { objRoot, variablePath } =
                                        variable;
                                      $stateSet(objRoot, variablePath, value);
                                      return value;
                                    })?.apply(null, [actionArgs]);
                                  })()
                                : undefined;
                              if (
                                $steps["updatePasswordInputValue"] != null &&
                                typeof $steps["updatePasswordInputValue"] ===
                                  "object" &&
                                typeof $steps["updatePasswordInputValue"]
                                  .then === "function"
                              ) {
                                $steps["updatePasswordInputValue"] =
                                  await $steps["updatePasswordInputValue"];
                              }
                            }).apply(null, eventArgs);
                          },
                          placeholder: "Password",
                          value: generateStateValueProp($state, [
                            "passwordInput",
                            "value"
                          ])
                        };
                        initializeCodeComponentStates(
                          $state,
                          [
                            {
                              name: "value",
                              plasmicStateName: "passwordInput.value"
                            }
                          ],

                          [],
                          AntdPassword_Helpers ?? {},
                          child$Props
                        );
                        return (
                          <AntdPassword
                            data-plasmic-name={"passwordInput"}
                            data-plasmic-override={overrides.passwordInput}
                            {...child$Props}
                          />
                        );
                      })()
                    : null}
                </div>
                <div className={classNames(projectcss.all, sty.column__riLor)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__pegZo)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__hQqZ4)}
                    >
                      <PlasmicImg__
                        data-plasmic-name={"img"}
                        data-plasmic-override={overrides.img}
                        alt={""}
                        className={classNames(sty.img)}
                        displayHeight={"auto"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"80px"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"auto"}
                        loading={"lazy"}
                        src={{
                          src: "/plasmic/portal/images/artboard141Png.png",
                          fullWidth: 484,
                          fullHeight: 308,
                          aspectRatio: undefined
                        }}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__gqaal
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FCF6F6", fontWeight: 700 }}
                          >
                            {"Portal"}
                          </span>
                        </React.Fragment>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "columns", "button", "input", "passwordInput", "img"],
  columns: ["columns", "button", "input", "passwordInput", "img"],
  button: ["button"],
  input: ["input"],
  passwordInput: ["passwordInput"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLogin__ArgProps,
          internalVariantPropNames: PlasmicLogin__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLogin__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogin";
  } else {
    func.displayName = `PlasmicLogin.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard(WrappedComponent) {
  const PageGuard = props => (
    <PlasmicPageGuard__
      minRole={null}
      appId={"axW1Q7tQMGoC9jdxnXE57v"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={false}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

export const PlasmicLogin = Object.assign(
  // Top-level PlasmicLogin renders the root element
  withPlasmicPageGuard(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    button: makeNodeComponent("button"),
    input: makeNodeComponent("input"),
    passwordInput: makeNodeComponent("passwordInput"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicLogin
    internalVariantProps: PlasmicLogin__VariantProps,
    internalArgProps: PlasmicLogin__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicLogin;
/* prettier-ignore-end */
