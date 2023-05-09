Talk.ready.then(function () {
  var me = new Talk.User({
    id: "2123436",
    name: "Alice",
    email: "alice@example.com",
    photoUrl: "https://talkjs.com/images/avatar-1.jpg",
    role: "support",
    welcomeMessage: "Hey there! How can I help?",
  });
  window.talkSession = new Talk.Session({
    appId: "<APP_ID>", // replace with your app ID
    me: me,
  });
  var sebastian = new Talk.User({
    id: "2654331",
    name: "Sebastian",
    email: "Sebastian@example.com",
    photoUrl: "https://talkjs.com/images/avatar-5.jpg",
    role: "customer",
    welcomeMessage: "Hi!",
  });
  var bob = new Talk.User({
    id: "2432332",
    name: "Bob",
    email: "Bob@example.com",
    photoUrl: "https://talkjs.com/images/avatar-4.jpg",
    role: "customer",
    welcomeMessage: "Hello!",
  });

  var conversation = talkSession.getOrCreateConversation(
    Talk.oneOnOneId(me, sebastian)
  );
  conversation.setParticipant(me);
  conversation.setParticipant(sebastian);

  var conversation2 = talkSession.getOrCreateConversation(
    Talk.oneOnOneId(me, bob)
  );
  conversation2.setParticipant(me);
  conversation2.setParticipant(bob);

  var inbox = talkSession.createInbox({ selected: conversation });
  inbox.setFeedFilter({ custom: { answered: ["!=", "true"] } });
  inbox.mount(document.getElementById("talkjs-container"));
});
