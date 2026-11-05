(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NewSupplier");
            this.set_titletext("New Supplier");
            this.set_font("normal 500 14px/20px \"Segoe UI\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_categories", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"32\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"categoryId\" type=\"STRING\" size=\"32\"/><Column id=\"productCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_products", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"32\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"categoryId\" type=\"STRING\" size=\"32\"/><Column id=\"productCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_product_request", this);
            obj._setContents("<ColumnInfo><Column id=\"categoryId\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInput", this);
            obj._setContents("<ColumnInfo><Column id=\"supplierName\" type=\"STRING\" size=\"256\"/><Column id=\"contactNumber\" type=\"STRING\" size=\"256\"/><Column id=\"categoryId\" type=\"STRING\" size=\"256\"/><Column id=\"productId\" type=\"STRING\" size=\"256\"/><Column id=\"buyingPrice\" type=\"STRING\" size=\"256\"/><Column id=\"returnPolicy\" type=\"STRING\" size=\"256\"/><Column id=\"imageUrl\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"supplierId\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fd_image", this);
            obj.set_accept("image/png,image/jpeg");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fut_image", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00","0","0","500","720",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","29","27","124","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("New Supplier");
            obj.set_font("normal 500 20px/30px \"Segoe UI\"");
            obj.set_color("#383e49");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div00","142","69","211","81",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.div00.addChild(obj.name, obj);

            obj = new ImageViewer("img00","0","0","81","81",null,null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("0");
            obj.set_border("1px dashed #9d9d9d");
            obj.set_borderRadius("50%");
            obj.set_stretch("fixaspectratio");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00","101","9","110","20",null,null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("Drag image here");
            obj.set_font("normal 400 14px/20px \"Segoe UI\"");
            obj.set_color("#858d9d");
            obj.set_textAlign("center");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("sta01","149","30","14","20",null,null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("2");
            obj.set_text("or");
            obj.set_font("normal 400 14px/20px \"Segoe UI\"");
            obj.set_color("#858d9d");
            obj.set_textAlign("center");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("sta02","109","52","94","20",null,null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("Browse image");
            obj.set_font("normal 400 14px/20px \"Segoe UI\"");
            obj.set_color("#448df2");
            obj.set_textAlign("center");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Div("div01","29","182","440","44",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","0","10","112","24",null,null,null,null,null,null,this.div00.form.div01.form);
            obj.set_taborder("0");
            obj.set_text("Supplier Name");
            obj.set_font("normal 500 16px/24px \"Segoe UI\"");
            obj.set_color("#48505e");
            this.div00.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00",null,"0","273","44","0",null,null,null,null,null,this.div00.form.div01.form);
            obj.set_taborder("1");
            obj.set_borderRadius("8px");
            obj.set_displaynulltext("Enter supplier name");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            this.div00.form.div01.addChild(obj.name, obj);

            obj = new Div("div01_00","29","250","440","44",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","0","10","112","24",null,null,null,null,null,null,this.div00.form.div01_00.form);
            obj.set_taborder("0");
            obj.set_text("Product");
            obj.set_font("normal 500 16px/24px \"Segoe UI\"");
            obj.set_color("#48505e");
            this.div00.form.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo_product",null,"0","273","44","0",null,null,null,null,null,this.div00.form.div01_00.form);
            obj.set_taborder("1");
            obj.set_borderRadius("8px");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            obj.set_displaynulltext("Select product");
            obj.set_codecolumn("id");
            obj.set_datacolumn("name");
            obj.set_type("filterlike");
            this.div00.form.div01_00.addChild(obj.name, obj);

            obj = new Div("div01_00_00","29","318","440","44",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","0","10","112","24",null,null,null,null,null,null,this.div00.form.div01_00_00.form);
            obj.set_taborder("0");
            obj.set_text("Category");
            obj.set_font("normal 500 16px/24px \"Segoe UI\"");
            obj.set_color("#48505e");
            this.div00.form.div01_00_00.addChild(obj.name, obj);

            obj = new Combo("cbo_category",null,"0","273","44","0",null,null,null,null,null,this.div00.form.div01_00_00.form);
            obj.set_taborder("1");
            obj.set_borderRadius("8px");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            obj.set_displaynulltext("Select product category");
            obj.set_codecolumn("id");
            obj.set_datacolumn("name");
            this.div00.form.div01_00_00.addChild(obj.name, obj);

            obj = new Div("div01_00_00_00","29","386","440","44",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","0","10","112","24",null,null,null,null,null,null,this.div00.form.div01_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("Buying Price");
            obj.set_font("normal 500 16px/24px \"Segoe UI\"");
            obj.set_color("#48505e");
            this.div00.form.div01_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt00",null,"0","273","44","0",null,null,null,null,null,this.div00.form.div01_00_00_00.form);
            obj.set_taborder("1");
            obj.set_borderRadius("8px");
            obj.set_displaynulltext("Enter buying price");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            this.div00.form.div01_00_00_00.addChild(obj.name, obj);

            obj = new Div("div01_00_00_00_00","29","454","440","44",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","0","10","131","24",null,null,null,null,null,null,this.div00.form.div01_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("Contact Number");
            obj.set_font("normal 500 16px/24px \"Segoe UI\"");
            obj.set_color("#48505e");
            this.div00.form.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt00",null,"0","273","44","0",null,null,null,null,null,this.div00.form.div01_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_borderRadius("8px");
            obj.set_displaynulltext("Enter supplier contact number");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            this.div00.form.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Div("div02","29","522","319","104",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("div02");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","38","24",null,null,null,null,null,null,this.div00.form.div02.form);
            obj.set_taborder("0");
            obj.set_text("Type");
            obj.set_font("normal 500 16px/24px \"Segoe UI\"");
            obj.set_color("#48505e");
            this.div00.form.div02.addChild(obj.name, obj);

            obj = new Div("div00",null,"0","157","104","0",null,null,null,null,null,this.div00.form.div02.form);
            obj.set_taborder("1");
            this.div00.form.div02.addChild(obj.name, obj);

            obj = new Button("btn00","0","0","157","44",null,null,null,null,null,null,this.div00.form.div02.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("Not taking return");
            obj.set_borderRadius("8px");
            obj.set_color("#858d9d");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            this.div00.form.div02.form.div00.addChild(obj.name, obj);

            obj = new Button("btn01","0",null,"120","44",null,"0",null,null,null,null,this.div00.form.div02.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("Taking return");
            obj.set_borderRadius("8px");
            obj.set_color("#858d9d");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            this.div00.form.div02.form.div00.addChild(obj.name, obj);

            obj = new Button("btn00","229","658","110","39",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("Discard");
            obj.set_borderRadius("4px");
            obj.set_color("#858d9d");
            obj.set_font("normal 500 16px/100% \"Segoe UI\"");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn01","351","658","119","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("Add Supplier");
            obj.set_borderRadius("4px");
            obj.set_background("#1366d9");
            obj.set_color("#ffffff");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form.div00.form
            obj = new Layout("default","",0,0,this.div00.form.div00.form,function(p){});
            this.div00.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div01.form
            obj = new Layout("default","",0,0,this.div00.form.div01.form,function(p){});
            this.div00.form.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div01_00.form
            obj = new Layout("default","",0,0,this.div00.form.div01_00.form,function(p){});
            this.div00.form.div01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div01_00_00.form
            obj = new Layout("default","",0,0,this.div00.form.div01_00_00.form,function(p){});
            this.div00.form.div01_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div01_00_00_00.form
            obj = new Layout("default","",0,0,this.div00.form.div01_00_00_00.form,function(p){});
            this.div00.form.div01_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div01_00_00_00_00.form
            obj = new Layout("default","",0,0,this.div00.form.div01_00_00_00_00.form,function(p){});
            this.div00.form.div01_00_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div02.form.div00.form
            obj = new Layout("default","",0,0,this.div00.form.div02.form.div00.form,function(p){});
            this.div00.form.div02.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div02.form
            obj = new Layout("default","",0,0,this.div00.form.div02.form,function(p){});
            this.div00.form.div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,945,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("NewSupplier.xfdl", function() {

        this.SUPPLIER_API = "http://localhost:8080/supplier";
        this.returnPolicy = "not_taking_return";
        this.imageUrl = "";
        this.hasImage = false;
        this.preparingImage = false;
        this.saving = false;

        this.NewSupplier_onload = function(obj, e)
        {
            var form = this.div00.form;
            form.div01_00_00.form.cbo_category.set_innerdataset(this.ds_categories);
            form.div01_00.form.cbo_product.set_innerdataset(this.ds_products);
            form.div01_00.form.cbo_product.set_enable(true);
            this.fn_selectReturnPolicy("not_taking_return");
            this.transaction("getCategories", this.SUPPLIER_API + "/categories",
                             "", "ds_categories=IDDataset", "requestType=categories", "fn_callback");
        };

        this.fn_callback = function(serviceId, errorCode, errorMessage)
        {
            if (errorCode < 0) {
                this.saving = false;
                this.div00.form.btn01.set_enable(true);
                if (serviceId == "getProducts") {
                    this.div00.form.div01_00_00.form.cbo_category.set_enable(true);
                    this.div00.form.div01_00.form.cbo_product.set_enable(true);
                }
                this.alert(errorMessage || "Supplier request failed.");
                return;
            }
            if (serviceId == "getCategories") {
                if (this.ds_categories.getRowCount() == 0) {
                    this.alert("No product categories found. You may still create a supplier without a product.");
                }
            } else if (serviceId == "getProducts") {
                this.div00.form.div01_00_00.form.cbo_category.set_enable(true);
                this.div00.form.div01_00.form.cbo_product.set_enable(true);
                if (this.ds_products.getRowCount() == 0) {
                    this.alert("No products found for the selected category.");
                }
            } else if (serviceId == "addSupplier") {
                this.saving = false;
                this.alert("Supplier added successfully.");
                this.close(true);
            }
        };

        this.div01_category_onitemchanged = function(obj, e)
        {
            this.ds_products.clearData();
            var productCombo = this.div00.form.div01_00.form.cbo_product;
            productCombo.set_value(null);
            productCombo.set_enable(true);
            var categoryId = e.postvalue;
            if (categoryId === null || categoryId === undefined || categoryId === "") return;

            this.ds_product_request.clearData();
            var row = this.ds_product_request.addRow();
            this.ds_product_request.setColumn(row, "categoryId", categoryId);
            obj.set_enable(false);
            this.transaction("getProducts", this.SUPPLIER_API + "/products",
                             "dsInput=ds_product_request", "ds_products=IDDataset", "", "fn_callback");
        };

        this.fn_selectReturnPolicy = function(value)
        {
            this.returnPolicy = value;
            var btnNo = this.div00.form.div02.form.div00.form.btn00;
            var btnYes = this.div00.form.div02.form.div00.form.btn01;
            btnNo.set_background(value == "not_taking_return" ? "#1366d9" : "#ffffff");
            btnNo.set_color(value == "not_taking_return" ? "#ffffff" : "#858d9d");
            btnYes.set_background(value == "taking_return" ? "#1366d9" : "#ffffff");
            btnYes.set_color(value == "taking_return" ? "#ffffff" : "#858d9d");
        };

        this.btn_not_taking_return_onclick = function(obj, e)
        {
            this.fn_selectReturnPolicy("not_taking_return");
        };

        this.btn_taking_return_onclick = function(obj, e)
        {
            this.fn_selectReturnPolicy("taking_return");
        };

        this.div00_btn00_onclick = function(obj, e)
        {
            if (!this.saving) this.close(false);
        };

        this.fn_trim = function(value)
        {
            return value === null || value === undefined ? "" : ("" + value).replace(/^\s+|\s+$/g, "");
        };

        this.fn_validate = function()
        {
            var ui = this.div00.form;
            var name = this.fn_trim(ui.div01.form.edt00.value);
            var contact = this.fn_trim(ui.div01_00_00_00_00.form.edt00.value);
            var categoryId = this.fn_trim(ui.div01_00_00.form.cbo_category.value);
            var productId = this.fn_trim(ui.div01_00.form.cbo_product.value);
            var buyingPrice = this.fn_trim(ui.div01_00_00_00.form.edt00.value);

            if (!name || name.length > 150) {
                this.alert("Enter Supplier Name (maximum 150 characters).");
                ui.div01.form.edt00.setFocus();
                return false;
            }
            if (!contact || contact.length > 50) {
                this.alert("Enter Contact Number (maximum 50 characters).");
                ui.div01_00_00_00_00.form.edt00.setFocus();
                return false;
            }
            if (categoryId || productId || buyingPrice) {
                if (!categoryId || !productId || !buyingPrice) {
                    this.alert("Category, Product and Buying Price must be entered together.");
                    return false;
                }
                if (!/^(?:0|[1-9]\d*)(?:\.\d{1,2})?$/.test(buyingPrice) || Number(buyingPrice) <= 0) {
                    this.alert("Buying Price must be a positive number (maximum 2 decimal places).");
                    ui.div01_00_00_00.form.edt00.setFocus();
                    return false;
                }
            }
            return true;
        };

        this.fn_fillRequest = function()
        {
            var ui = this.div00.form;
            var ds = this.dsInput;
            ds.clearData();
            var row = ds.addRow();
            ds.setColumn(row, "supplierName", this.fn_trim(ui.div01.form.edt00.value));
            ds.setColumn(row, "contactNumber", this.fn_trim(ui.div01_00_00_00_00.form.edt00.value));
            ds.setColumn(row, "categoryId", this.fn_trim(ui.div01_00_00.form.cbo_category.value));
            ds.setColumn(row, "productId", this.fn_trim(ui.div01_00.form.cbo_product.value));
            ds.setColumn(row, "buyingPrice", this.fn_trim(ui.div01_00_00_00.form.edt00.value));
            ds.setColumn(row, "returnPolicy", this.returnPolicy);
            ds.setColumn(row, "imageUrl", this.imageUrl);
        };

        this.fn_saveSupplier = function()
        {
            this.fn_fillRequest();
            this.transaction("addSupplier", this.SUPPLIER_API + "/add",
                             "dsInput=dsInput", "ds_result=IDDataset", "", "fn_callback");
        };

        this.div00_btn01_onclick = function(obj, e)
        {
            if (this.saving || this.preparingImage || !this.fn_validate()) return;
            this.saving = true;
            this.div00.form.btn01.set_enable(false);
            if (this.hasImage && !this.imageUrl) {
                // Upload image first, then save its URL with the supplier record.
                this.fut_image.upload(this.SUPPLIER_API + "/upload-image");
            } else {
                this.fn_saveSupplier();
            }
        };

        this.fn_browseImage = function(obj, e)
        {
            if (!this.saving) this.fd_image.open("Supplier image", FileDialog.MULTILOAD);
        };

        this.fd_image_onclose = function(obj, e)
        {
            if (e.virtualfiles && e.virtualfiles.length > 0) {
                this.fn_prepareImage(e.virtualfiles[0]);
            }
        };

        this.fn_image_ondrop = function(obj, e)
        {
            if (!this.saving && e.datatype == "file" && e.filelist && e.filelist.length > 0) {
                this.fn_prepareImage(e.filelist[0]);
            }
        };

        this.fn_prepareImage = function(file)
        {
            var name = file.filename || "";
            if (!/\.(jpg|jpeg|png)$/i.test(name)) {
                this.alert("Only PNG and JPEG images are supported.");
                return;
            }
            this.preparingImage = true;
            this.hasImage = false;
            this.imageUrl = "";
            this.fut_image.clearFileList();
            this.div00.form.div00.form.sta00.set_text(name);
            this.div00.form.div00.form.img00.set_image("");
            file.addEventHandler("onsuccess", this.fn_virtualFileSuccess, this);
            file.addEventHandler("onerror", this.fn_virtualFileError, this);
            file.open(null, 1);
        };

        this.fn_virtualFileSuccess = function(obj, e)
        {
            if (e.reason == 1) {
                obj.getFileSize();
            } else if (e.reason == 9) {
                this.preparingImage = false;
                if (e.filesize > 5 * 1024 * 1024 || e.filesize <= 0) {
                    this.div00.form.div00.form.sta00.set_text("Drag image here");
                    this.alert("Image must be smaller than 5 MB and not empty.");
                    return;
                }
                this.fut_image.addFile(obj.filename, obj);
                this.hasImage = true;
            }
        };

        this.fn_virtualFileError = function(obj, e)
        {
            this.preparingImage = false;
            this.hasImage = false;
            this.div00.form.div00.form.sta00.set_text("Drag image here");
            this.alert("Unable to read selected image: " + e.errormsg);
        };

        this.fut_image_onsuccess = function(obj, e)
        {
            var url = "";
            if (e.code >= 0 && e.datasets && e.datasets.length > 0 && e.datasets[0].getRowCount() > 0) {
                url = e.datasets[0].getColumn(0, "imageUrl");
            }
            if (!url) {
                this.saving = false;
                this.div00.form.btn01.set_enable(true);
                this.alert(e.message || "Image uploaded without a valid response.");
                return;
            }
            this.imageUrl = url;
            this.div00.form.div00.form.img00.set_image(this.SUPPLIER_API.replace(/\/supplier$/, "") + url);
            this.fn_saveSupplier();
        };

        this.fut_image_onerror = function(obj, e)
        {
            this.saving = false;
            this.div00.form.btn01.set_enable(true);
            this.alert("Image upload failed: " + e.errormsg);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.NewSupplier_onload,this);
            this.div00.form.div00.form.img00.addEventHandler("ondrop",this.fn_image_ondrop,this);
            this.div00.form.div00.form.sta02.addEventHandler("onclick",this.fn_browseImage,this);
            this.div00.form.div01_00_00.form.cbo_category.addEventHandler("onitemchanged",this.div01_category_onitemchanged,this);
            this.div00.form.div02.form.div00.form.btn00.addEventHandler("onclick",this.btn_not_taking_return_onclick,this);
            this.div00.form.div02.form.div00.form.btn01.addEventHandler("onclick",this.btn_taking_return_onclick,this);
            this.div00.form.btn00.addEventHandler("onclick",this.div00_btn00_onclick,this);
            this.div00.form.btn01.addEventHandler("onclick",this.div00_btn01_onclick,this);
            this.fd_image.addEventHandler("onclose",this.fd_image_onclose,this);
            this.fut_image.addEventHandler("onsuccess",this.fut_image_onsuccess,this);
            this.fut_image.addEventHandler("onerror",this.fut_image_onerror,this);
        };
        this.loadIncludeScript("NewSupplier.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
