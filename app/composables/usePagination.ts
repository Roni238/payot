import { ref, computed, type Ref, unref } from 'vue';

export function usePagination<T>(
  items: Ref<T[]>,
  itemsPerPage: number | Ref<number> = 4,
  maxVisiblePages: number = 5
) {
  const currentPage = ref(1)

  const totalPages = computed(() => {
    return Math.ceil(items.value.length / unref(itemsPerPage))
  })

  const paginatedItems = computed(() => {
    const perPage = unref(itemsPerPage)
    const startIndex = (currentPage.value - 1) * perPage
    return items.value.slice(startIndex, startIndex + perPage)
  })

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++
    }
  }
  
  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
    }
  }

  const visiblePages = computed(() => {
    const halfVisible = Math.floor(maxVisiblePages / 2)

    let startPage = Math.max(1, currentPage.value - halfVisible)
    let endPage = Math.min(totalPages.value, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    const pages = []
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  })

  return {
    currentPage,
    totalPages,
    paginatedItems,
    nextPage,
    prevPage,
    goToPage,
    visiblePages,
  };
}
