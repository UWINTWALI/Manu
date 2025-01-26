export const fetchItems = async () => {
  const response = await fetch('/api/items');
  return response.json();
};

export const postItem = async (itemData) => {
  const response = await fetch('/api/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(itemData),
  });
  return response.json();
};

export const deleteItem = async (itemId) => {
  const response = await fetch(`/api/items/${itemId}`, { method: 'DELETE' });
  return response.json();
};

export const fetchCommunityProjects = async () => {
  const response = await fetch('/api/community-projects');
  return response.json();
};
