"use client";

import Profile from "@components/Profile";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userposts, setUserPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch(`/api/users/${params.id}/posts`);
    const data = await response.json();

    setUserPosts(data);
  };

  useEffect(() => {
    if (params.id) fetchPosts();
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName} personalized profile page.  Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userposts}
    />
  );
};

export default UserProfile;
