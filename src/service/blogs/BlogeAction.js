export default async function getAllBlogs() {
  try {
    const response = await fetch(
      `https://blog-api.automatex.dev/blogs?sort_by=created_at`
    );
    const data = await response.json();
    console.log("Data", data.blogs);
    return data?.blogs;
  } catch (error) {
    console.log("Error fetching all blogs", error);
  }
}

export async function getSingleBlog(title) {
  try {
    const response = await fetch(
      `https://blog-api.automatex.dev/blogs/${title}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching single blog", error);
  }
}
export async function updateBlog(id, updatedData, token) {
  try {
    const response = await fetch(`https://blog-api.automatex.dev/blogs/${id}`, {
      method: "DELETE", // or 'PATCH' based on your API
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    });
    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    // Validate the response data
    if (!data) {
      throw new Error("Invalid data received");
    }
    return data; // Return the updated blog post
  } catch (error) {
    console.error("Error updating blog:", error);
    return null;
  }
}
