var Session = (function() {

  var setSession = function(session) {
    closeSession();
    localStorage.setItem("session", session);
  };

  var getSession = function() {
    return localStorage.getItem("session");
  };

  var closeSession = function() {
    localStorage.removeItem("session");
    localStorage.clear()
  }
  
  return {
    setSession: setSession,
    getSession: getSession,
    closeSession: closeSession,
  }
})();

  export default Session;