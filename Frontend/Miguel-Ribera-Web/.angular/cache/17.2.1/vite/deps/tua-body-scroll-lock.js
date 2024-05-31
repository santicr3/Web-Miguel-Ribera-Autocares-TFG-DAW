import "./chunk-77MI3L3A.js";

// node_modules/tua-body-scroll-lock/dist/tua-bsl.mjs
var isServer = function isServer2() {
  return typeof window === "undefined";
};
var detectOS = function detectOS2(ua) {
  ua = ua || navigator.userAgent;
  var ipad = /(iPad).*OS\s([\d_]+)/.test(ua);
  var iphone = !ipad && /(iPhone\sOS)\s([\d_]+)/.test(ua);
  var android = /(Android);?[\s/]+([\d.]+)?/.test(ua);
  var ios = iphone || ipad;
  return {
    ios,
    android
  };
};
function getEventListenerOptions(options) {
  if (isServer())
    return false;
  if (!options) {
    throw new Error("options must be provided");
  }
  var isSupportOptions = false;
  var listenerOptions = {
    get passive() {
      isSupportOptions = true;
      return void 0;
    }
  };
  var noop = function noop2() {
  };
  var testEvent = "__TUA_BSL_TEST_PASSIVE__";
  window.addEventListener(testEvent, noop, listenerOptions);
  window.removeEventListener(testEvent, noop, listenerOptions);
  var capture = options.capture;
  return isSupportOptions ? options : typeof capture !== "undefined" ? capture : false;
}
function noticeRequiredTargetElement(targetElement) {
  if (targetElement)
    return false;
  if (targetElement === null)
    return false;
  if (false)
    return false;
  if (true) {
    console.warn("If scrolling is also required in the floating layer, the target element must be provided.");
  }
  return true;
}
function getPreventEventDefault() {
  if ("__BSL_PREVENT_DEFAULT__" in window) {
    return window.__BSL_PREVENT_DEFAULT__;
  }
  window.__BSL_PREVENT_DEFAULT__ = function(event) {
    if (!event.cancelable)
      return;
    event.preventDefault();
  };
  return window.__BSL_PREVENT_DEFAULT__;
}
var initialLockState = {
  lockedNum: 0,
  lockedElements: [],
  unLockCallback: null,
  documentListenerAdded: false,
  initialClientPos: {
    clientX: 0,
    clientY: 0
  }
};
function getLockState(options) {
  if (isServer())
    return initialLockState;
  if (!(options === null || options === void 0 ? void 0 : options.useGlobalLockState))
    return getLockState.lockState;
  var lockState = "__BSL_LOCK_STATE__" in window ? Object.assign(Object.assign({}, initialLockState), window.__BSL_LOCK_STATE__) : initialLockState;
  window.__BSL_LOCK_STATE__ = lockState;
  return lockState;
}
getLockState.lockState = initialLockState;
function handleScroll(event, targetElement, initialClientPos) {
  if (targetElement) {
    var scrollTop = targetElement.scrollTop, scrollLeft = targetElement.scrollLeft, scrollWidth = targetElement.scrollWidth, scrollHeight = targetElement.scrollHeight, clientWidth = targetElement.clientWidth, clientHeight = targetElement.clientHeight;
    var clientX = event.targetTouches[0].clientX - initialClientPos.clientX;
    var clientY = event.targetTouches[0].clientY - initialClientPos.clientY;
    var isVertical = Math.abs(clientY) > Math.abs(clientX);
    var isOnTop = clientY > 0 && scrollTop === 0;
    var isOnLeft = clientX > 0 && scrollLeft === 0;
    var isOnRight = clientX < 0 && scrollLeft + clientWidth + 1 >= scrollWidth;
    var isOnBottom = clientY < 0 && scrollTop + clientHeight + 1 >= scrollHeight;
    if (isVertical && (isOnTop || isOnBottom) || !isVertical && (isOnLeft || isOnRight)) {
      return getPreventEventDefault()(event);
    }
  }
  event.stopPropagation();
  return true;
}
function setOverflowHiddenPc() {
  var $html = document.documentElement;
  var htmlStyle = Object.assign({}, $html.style);
  var scrollBarWidth = window.innerWidth - $html.clientWidth;
  var previousPaddingRight = parseInt(window.getComputedStyle($html).paddingRight, 10);
  $html.style.overflow = "hidden";
  $html.style.boxSizing = "border-box";
  $html.style.paddingRight = "".concat(scrollBarWidth + previousPaddingRight, "px");
  return function() {
    ["overflow", "boxSizing", "paddingRight"].forEach(function(x) {
      $html.style[x] = htmlStyle[x] || "";
    });
  };
}
function setOverflowHiddenMobile(options) {
  var $html = document.documentElement;
  var $body = document.body;
  var scrollTop = $html.scrollTop || $body.scrollTop;
  var htmlStyle = Object.assign({}, $html.style);
  var bodyStyle = Object.assign({}, $body.style);
  $html.style.height = "100%";
  $html.style.overflow = "hidden";
  $body.style.top = "-".concat(scrollTop, "px");
  $body.style.width = "100%";
  $body.style.height = "auto";
  $body.style.position = "fixed";
  $body.style.overflow = (options === null || options === void 0 ? void 0 : options.overflowType) || "hidden";
  return function() {
    $html.style.height = htmlStyle.height || "";
    $html.style.overflow = htmlStyle.overflow || "";
    ["top", "width", "height", "overflow", "position"].forEach(function(x) {
      $body.style[x] = bodyStyle[x] || "";
    });
    var supportsNativeSmoothScroll = "scrollBehavior" in document.documentElement.style;
    if (supportsNativeSmoothScroll) {
      window.scrollTo({
        top: scrollTop,
        behavior: "instant"
      });
    } else {
      window.scrollTo(0, scrollTop);
    }
  };
}
var eventListenerOptions = getEventListenerOptions({
  passive: false
});
function lock(targetElement, options) {
  if (isServer())
    return;
  noticeRequiredTargetElement(targetElement);
  var lockState = getLockState(options);
  if (detectOS().ios) {
    if (targetElement) {
      var elementArray = Array.isArray(targetElement) ? targetElement : [targetElement];
      elementArray.forEach(function(element) {
        if (element && lockState.lockedElements.indexOf(element) === -1) {
          element.ontouchstart = function(event) {
            var _event$targetTouches$ = event.targetTouches[0], clientX = _event$targetTouches$.clientX, clientY = _event$targetTouches$.clientY;
            lockState.initialClientPos = {
              clientX,
              clientY
            };
          };
          element.ontouchmove = function(event) {
            if (event.targetTouches.length !== 1)
              return;
            handleScroll(event, element, lockState.initialClientPos);
          };
          lockState.lockedElements.push(element);
        }
      });
    }
    if (!lockState.documentListenerAdded) {
      document.addEventListener("touchmove", getPreventEventDefault(), eventListenerOptions);
      lockState.documentListenerAdded = true;
    }
  } else if (lockState.lockedNum <= 0) {
    lockState.unLockCallback = detectOS().android ? setOverflowHiddenMobile(options) : setOverflowHiddenPc();
  }
  lockState.lockedNum += 1;
}
function unlock(targetElement, options) {
  if (isServer())
    return;
  noticeRequiredTargetElement(targetElement);
  var lockState = getLockState(options);
  lockState.lockedNum -= 1;
  if (lockState.lockedNum > 0)
    return;
  if (!detectOS().ios && typeof lockState.unLockCallback === "function") {
    lockState.unLockCallback();
    return;
  }
  if (targetElement) {
    var elementArray = Array.isArray(targetElement) ? targetElement : [targetElement];
    elementArray.forEach(function(element) {
      var index = lockState.lockedElements.indexOf(element);
      if (index !== -1) {
        element.ontouchmove = null;
        element.ontouchstart = null;
        lockState.lockedElements.splice(index, 1);
      }
    });
  }
  if (lockState.documentListenerAdded) {
    document.removeEventListener("touchmove", getPreventEventDefault(), eventListenerOptions);
    lockState.documentListenerAdded = false;
  }
}
function clearBodyLocks(options) {
  if (isServer())
    return;
  var lockState = getLockState(options);
  lockState.lockedNum = 0;
  if (!detectOS().ios && typeof lockState.unLockCallback === "function") {
    lockState.unLockCallback();
    return;
  }
  if (lockState.lockedElements.length) {
    var element = lockState.lockedElements.pop();
    while (element) {
      element.ontouchmove = null;
      element.ontouchstart = null;
      element = lockState.lockedElements.pop();
    }
  }
  if (lockState.documentListenerAdded) {
    document.removeEventListener("touchmove", getPreventEventDefault(), eventListenerOptions);
    lockState.documentListenerAdded = false;
  }
}
export {
  clearBodyLocks,
  lock,
  unlock
};
/*! Bundled license information:

tua-body-scroll-lock/dist/tua-bsl.mjs:
  (**
   * tua-body-scroll-lock v1.5.0
   * (c) 2024 Evinma, BuptStEve
   * @license MIT
   *)
*/
//# sourceMappingURL=tua-body-scroll-lock.js.map
