var that;
var tabscon_i = 4;
class Tab {
    constructor(id) {
        that = this;
        this.main = document.querySelector(id);
        this.firstnav = this.main.querySelector(".fisrstnav ul");
        this.tabadd = this.main.querySelector(".tabadd");
        this.tabscon = this.main.querySelector(".tabscon");
        this.init();
    }
    getElements() {
        this.lis = this.main.querySelectorAll("li");
        this.sections = this.main.querySelectorAll("section");
    }
    init() {
        this.getElements();
        this.tabadd.addEventListener("click", this.addTab);
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].setAttribute("index", i);
            this.lis[i].addEventListener("click", this.toggleTab);
            // this.lis[i].onclick = this.toggleTab;
            this.lis[i].children[1].addEventListener("click", this.removeTab);
            this.lis[i].children[0].addEventListener("dblclick", this.editTab);
            this.sections[i].addEventListener("dblclick", this.editTab);
        }
    }
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = "";
            this.sections[i].className = "";
        }
    }
    toggleTab() {
        that.clearClass();
        this.className = "liactive";
        that.sections[this.getAttribute('index')].className = "conactive";

    }
    addTab() {
        that.clearClass();
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        var section = '<section class="conactive">测试' + tabscon_i + '</section>';
        tabscon_i++;
        that.firstnav.insertAdjacentHTML('beforeend', li);
        that.tabscon.insertAdjacentHTML('beforeend', section);
        // var li = document.createElement("li");
        // that.firstnav.appendChild(li);
        // li.innerHTML = '<span>新选项卡</span><span class="iconfont icon-guanbi"></span>';
        // li.className = 'liactive';
        // var section = document.createElement("secetion");
        // that.tabscon.appendChild(section);
        // section.innerHTML = '测试' + that.lis.length;
        // section.className = 'conactive';
        that.init();

    }
    removeTab(e) {
        e.stopPropagation();
        if (this.parentNode.getAttribute('index') == that.lis.length - 1) {
            that.lis[that.lis.length - 2].click();
        }
        this.parentNode.remove();
        that.sections[this.parentNode.getAttribute('index')].remove();
        that.init();

    }
    editTab() {
        // 禁止双击选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        var str = this.innerHTML;
        this.innerHTML = '<input type="text">';
        this.children[0].value = str;
        this.children[0].select();
        this.children[0].addEventListener("blur", function() {
            this.parentNode.innerHTML = this.value;
        });
        this.children[0].addEventListener("keyup", function(e) {
            // console.log(this);
            // this指向的是input;
            if (e.keyCode == 13) {
                this.blur();
            }

        });
    }
}
new Tab("#tab");