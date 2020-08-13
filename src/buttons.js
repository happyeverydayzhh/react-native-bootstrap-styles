import { mixinButtonSize, mixinButtonVariant, mixinButtonOutlineVariant } from './mixins/buttons';
import { mixinBoxShadow } from './mixins/box-shadow';

export default function getClasses(constants, classes) {
  const {
    WHITE,
    BODY_COLOR,
    THEME_COLORS,
    FONT_WEIGHT_NORMAL,
    LINK_COLOR,
    BTN_PADDING_Y,
    BTN_PADDING_X,
    BTN_LINE_HEIGHT,
    BTN_BORDER_WIDTH,
    BTN_FONT_FAMILY,
    BTN_FONT_SIZE,
    BTN_BORDER_RADIUS,
    BTN_FONT_WEIGHT,
    BTN_DISABLED_OPACITY,
    BTN_OUTLINE_BACKGROUND_COLOR,
  } = constants;

  const _classes = {
    btn: Object.assign({
      // display: inline-block;
      // fontFamily: $btn-font-family; // see btnText
      // fontWeight: $btn-font-weight; // see btnText
      // color: $body-color; // see btnText
      // text-align: center; // see btnText
      // whiteSpace: 'nowrap', // use "numberOfLines={1}"
      backgroundColor: 'transparent',
      borderWidth: BTN_BORDER_WIDTH,
      borderStyle: 'solid',
      borderColor: 'transparent',
      overflow: 'hidden', // exprimental / important for rounded borders
      justifyContent: 'center', // verticalAlign: 'middle',

      // todo / text-decoration: if($link-decoration == none, null, none);

      // @include transition($btn-transition);

      // @include hover() {
      //   color: $body-color;
      //   text-decoration: none;
      // }

      // &:focus,
      // &.focus {
      //   outline: 0;
      //   box-shadow: $btn-focus-box-shadow;
      // }

      // // Disabled comes first so active can properly restyle
      // &.disabled,
      // &:disabled {
      //   opacity: $btn-disabled-opacity;
      //   @include box-shadow(none);
      // }

      // &:not(:disabled):not(.disabled) {
      //   cursor: if($enable-pointer-cursor-for-buttons, pointer, null);

      //   &:active,
      //   &.active {
      //     @include box-shadow($btn-active-box-shadow);

      //     &:focus {
      //       @include box-shadow($btn-focus-box-shadow, $btn-active-box-shadow);
      //     }
      //   }
      // }
    },
      mixinButtonSize(
        constants,
        BTN_PADDING_Y, BTN_PADDING_X,
        BTN_FONT_SIZE, BTN_LINE_HEIGHT, BTN_BORDER_RADIUS,
      ),
    ),

    btnDisabled: Object.assign({
      opacity: BTN_DISABLED_OPACITY,
    },
      mixinBoxShadow('none'),
    ),

    btnTouchable: { // experimental
      borderRadius: BTN_BORDER_RADIUS,
      overflow: 'hidden', // experimental x2
    },

    btnText: Object.assign({}, classes.text, {
      fontSize: BTN_FONT_SIZE,
      fontFamily: BTN_FONT_FAMILY,
      fontWeight: BTN_FONT_WEIGHT,
      color: BODY_COLOR,
      textAlign: 'center',
    }),

    btnLink: {
      // font-weight: $font-weight-normal; // see btnLinkText
      // color: $link-color; // see btnLinkText
      // text-decoration: $link-decoration; // see btnLinkText

      // todo
      // @include hover() {
      //   color: $link-hover-color;
      //   text-decoration: $link-hover-decoration;
      // }

      // &:focus,
      // &.focus {
      //   text-decoration: $link-hover-decoration;
      // }

      // &:disabled,
      // &.disabled {
      //   color: $btn-link-disabled-color;
      //   pointer-events: none;
      // }
      // No need for an active state here
    },

    btnLinkText: {
      fontWeight: FONT_WEIGHT_NORMAL,
      color: LINK_COLOR,
      // textDecoration: $link-decoration;
    },

    // btnLg: Object.assign({
    // },
    //   mixinButtonSize(
    //     constants,
    //     BTN_PADDING_Y_LG, BTN_PADDING_X_LG,
    //     BTN_FONT_SIZE_LG, BTN_LINE_HEIGHT_LG, BTN_BORDER_RADIUS_LG,
    //   ),
    // ),

    // .btn-lg {
    //   @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $btn-line-height-lg, $btn-border-radius-lg);
    // }

    // .btn-sm {
    //   @include button-size($btn-padding-y-sm, $btn-padding-x-sm, $btn-font-size-sm, $btn-line-height-sm, $btn-border-radius-sm);
    // }
  };

  // btn%color / ex: btnPrimary
  Object.keys(THEME_COLORS).forEach((item) => {
    const classColor = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    classes['btn' + classColor] = mixinButtonVariant(constants, THEME_COLORS[item], THEME_COLORS[item]);
  });

  // btnOutline%color / ex: btnOutlinePrimary
  Object.keys(THEME_COLORS).forEach((item) => {
    const classColor = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    classes['btnOutline' + classColor] = mixinButtonOutlineVariant(constants, THEME_COLORS[item], BTN_OUTLINE_BACKGROUND_COLOR);
  });

  // btnText%color / ex: btnTextPrimary
  Object.keys(THEME_COLORS).forEach((item) => {
    const classColor = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    classes['btnText' + classColor] = {
      color: WHITE, // temporal
    };
  });

  // btnOutlineText%color / ex: btnOutlineTextPrimary
  Object.keys(THEME_COLORS).forEach((item) => {
    const classColor = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    classes['btnOutlineText' + classColor] = {
      color: THEME_COLORS[item], // temporal
    };
  });

  return _classes;
};
