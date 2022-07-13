export const mixins = {
    methods: {
      // 获取完整报表链接
      async getReportUrl(paramData) {
        return this.$axios
            ._post("/outpnurse/getFineReportUrl", paramData)
            .then((res) => {
                if (res.success) {
                    return res.data.url
                } else {
                    this.$message({
                        message: res.message,
                        type: "warning",
                    });
                }
            });
    },
    },
  };