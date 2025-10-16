function Profile() {
  const imgUrl =
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=450";

  return (
    <div>
      <img src={imgUrl} alt="Tech Bro" />
      <h2>Ayo Haven Okunola</h2>
      <h3>Student Developer</h3>
      <p>
        I am a student developer from Nigeria. A tech enthusiast and a
        passionate learner.
      </p>
    </div>
  );
}

export default Profile;
