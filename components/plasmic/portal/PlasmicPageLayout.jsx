// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: axW1Q7tQMGoC9jdxnXE57v
// Component: CZ9Ckf2FOzzF
import * as React from "react";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  renderPlasmicSlot,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv
} from "@plasmicapp/react-web/lib/host";
import { usePlasmicDataOp } from "@plasmicapp/react-web/lib/data-sources";
import { RichLayout } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-layout";
import { LoadingBoundary } from "@plasmicpkgs/plasmic-basic-components";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: axW1Q7tQMGoC9jdxnXE57v/projectcss
import sty from "./PlasmicPageLayout.module.css"; // plasmic-import: CZ9Ckf2FOzzF/css
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: j6Exr6IzmpnF/icon

createPlasmicElementProxy;

export const PlasmicPageLayout__VariantProps = new Array();

export const PlasmicPageLayout__ArgProps = new Array("children");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPageLayout__RenderFunc(props) {
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
  let [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "variable",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });
  const new$Queries = {
    componentData2: usePlasmicDataOp(() => {
      return {
        sourceId: "kg27Khthh5W85SBD6wGA9T",
        opId: "40233028-4b14-4e00-92fa-0e3fc708229f",
        userArgs: {},
        cacheKey: `plasmic.$.40233028-4b14-4e00-92fa-0e3fc708229f.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    getSchemaForNavBar: usePlasmicDataOp(() => {
      return {
        sourceId: "4ZYYADAQoesjszGqnyuasC",
        opId: "76e49c8b-299a-4612-ab6c-0c908ec4f3bb",
        userArgs: {},
        cacheKey: `plasmic.$.76e49c8b-299a-4612-ab6c-0c908ec4f3bb.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
    $queries = new$Queries;
  }
  return (() => {
    try {
      return true;
    } catch (e) {
      if (
        e instanceof TypeError ||
        e?.plasmicType === "PlasmicUndefinedDataError"
      ) {
        return true;
      }
      throw e;
    }
  })() ? (
    <RichLayout
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
      fixSiderbar={false}
      layout={"side"}
      logoElement={
        <IconIcon
          className={classNames(projectcss.all, sty.svg___1XrYb)}
          role={"img"}
        />
      }
      navMenuItems={(() => {
        const __composite = [
          { path: null, name: "Home" },
          { name: null, path: null, routes: null },
          { name: null, path: null, routes: null },
          { name: null, path: null, routes: null }
        ];

        __composite["0"]["path"] = `/dashboard`;
        __composite["1"]["name"] = "Law25";
        __composite["1"]["path"] = `/law25/[business_name]`;
        __composite["1"]["routes"] = (() => {
          const __composite = [{ path: null, name: null }];
          __composite["0"]["path"] = `/law25/[business_name]`;
          __composite["0"]["name"] = "overview";
          return __composite;
        })();
        __composite["2"]["name"] = "Training";
        __composite["2"]["path"] = `/training`;
        __composite["2"]["routes"] = (() => {
          const __composite = [{ path: null, name: null }];
          __composite["0"]["path"] = `/training`;
          __composite["0"]["name"] = "Overview";
          return __composite;
        })();
        __composite["3"]["name"] = "Pharmacy";
        __composite["3"]["path"] = `/pharmacy`;
        __composite["3"]["routes"] = (() => {
          const __composite = [{ path: null, name: null }];
          __composite["0"]["path"] = `/pharmacy`;
          __composite["0"]["name"] = "Overview";
          return __composite;
        })();
        return __composite;
      })()}
      simpleNavTheme={(() => {
        const __composite = { customBgColor: null, scheme: null };
        __composite["customBgColor"] = "#010347";
        __composite["scheme"] = "custom";
        return __composite;
      })()}
      title={"Portal"}
    >
      <LoadingBoundary
        data-plasmic-name={"loadingBoundary"}
        data-plasmic-override={overrides.loadingBoundary}
        className={classNames("__wab_instance", sty.loadingBoundary)}
        loadingState={
          <DataCtxReader__>
            {$ctx => (
              <div className={classNames(projectcss.all, sty.freeBox__fcFmx)}>
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__pUCs)}
                  role={"img"}
                />
              </div>
            )}
          </DataCtxReader__>
        }
      >
        <DataCtxReader__>
          {$ctx => (
            <div className={classNames(projectcss.all, sty.freeBox__kNbrc)}>
              {renderPlasmicSlot({
                defaultContents: (
                  <section
                    className={classNames(projectcss.all, sty.section__t0PFo)}
                  >
                    <h1
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1___9EbeY
                      )}
                    >
                      {"Untitled page"}
                    </h1>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__jW8UL
                      )}
                    >
                      {
                        "Press the big blue + button to insert components like Tables, Text, Buttons, and Forms.\n\nJoin our Slack Community (icon in bottom left) for help!"
                      }
                    </div>
                  </section>
                ),

                value: args.children
              })}
            </div>
          )}
        </DataCtxReader__>
      </LoadingBoundary>
    </RichLayout>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "loadingBoundary"],
  loadingBoundary: ["loadingBoundary"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPageLayout__ArgProps,
          internalVariantPropNames: PlasmicPageLayout__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPageLayout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPageLayout";
  } else {
    func.displayName = `PlasmicPageLayout.${nodeName}`;
  }
  return func;
}

export const PlasmicPageLayout = Object.assign(
  // Top-level PlasmicPageLayout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    loadingBoundary: makeNodeComponent("loadingBoundary"),
    // Metadata about props expected for PlasmicPageLayout
    internalVariantProps: PlasmicPageLayout__VariantProps,
    internalArgProps: PlasmicPageLayout__ArgProps
  }
);

export default PlasmicPageLayout;
/* prettier-ignore-end */
