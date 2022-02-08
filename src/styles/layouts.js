import Colors from './colors';

export const Shadows = {
  full: {
    borderColor: Colors.Generic.shadowBorder,
    borderWidth: 1,
    elevation: 16,
    shadowColor: Colors.Generic.shadow,
    shadowOffset: {
      height: 8,
      width: 0,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
  },
  mid: {
    borderColor: Colors.Generic.shadowBorder,
    borderWidth: 1,
    elevation: 8,
    shadowColor: Colors.Generic.shadow,
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  overlay: {
    borderColor: Colors.Generic.shadowBorder,
    borderWidth: 1,
    elevation: 40,
    shadowColor: Colors.Generic.shadow,
    shadowOffset: {
      height: -2,
      width: 0,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  steady: {
    borderColor: Colors.Generic.shadowBorder,
    borderWidth: 1,
    elevation: 4,
    shadowColor: Colors.Generic.shadow,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
};

export const Layouts = {
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  borderBottom: {
    borderBottomWidth: 1,
  },
  borderTop: {
    borderTopWidth: 1,
  },
  bordered: {
    borderWidth: 1,
  },
  boxShadow: {
    borderColor: '#E0E0E0',
    borderTopWidth: 1,
    elevation: 7,
    shadowColor: 'rgba(0,0,0, 0.11)',
    shadowOffset: {
      height: -1,
      width: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 7,
  },
  centerHorizontal: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centerVertical: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  fullHeight: {
    height: '100%',
  },
  fullHeightAndWidth: {
    height: '100%',
    width: '100%',
  },
  fullWidth: {
    width: '100%',
  },
  horizontalContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  over: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  relative: {
    position: 'relative',
  },
  selfBaseline: {
    alignSelf: 'baseline',
  },
  selfCenter: {
    alignSelf: 'center',
  },
  selfEnd: {
    alignSelf: 'flex-end',
  },
  selfStart: {
    alignSelf: 'flex-start',
  },
  selfStretch: {
    alignSelf: 'stretch',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceEvenly: {
    justifyContent: 'space-evenly',
  },
};

export default {
  Layouts,
  Shadows,
};
