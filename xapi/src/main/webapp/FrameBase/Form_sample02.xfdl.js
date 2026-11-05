(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsEmployee", this);
            obj.set_keystring("G:Department");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Department","type" : "STRING","size" : "100"},{"id" : "EmployeeID","type" : "STRING","size" : "50"},{"id" : "EmployeeName","type" : "STRING","size" : "100"},{"id" : "Salary","type" : "INT","size" : "50"},{"id" : "Bonus","type" : "INT","size" : "50"},{"id" : "Allowance","type" : "INT","size" : "10"},{"id" : "Note","type" : "STRING","size" : "5"}]},"Rows" : [{"Department" : "HR","EmployeeID" : "E001","EmployeeName" : "John Smith","Salary" : "120000000","Bonus" : "200000","Allowance" : "1000000"},{"Department" : "HR","EmployeeID" : "E002","EmployeeName" : "Emily Johnson","Salary" : "11500000","Bonus" : "200000","Allowance" : "1000000"},{"Department" : "IT","EmployeeID" : "E003","EmployeeName" : "Michael Brown","Salary" : "130000000","Bonus" : "200000","Allowance" : "1500000"},{"Department" : "IT","EmployeeID" : "E004","EmployeeName" : "Sarah Williams","Salary" : "125000000","Bonus" : "200000","Allowance" : "1500000"},{"Department" : "IT","EmployeeID" : "E005","EmployeeName" : "David Taylor","Salary" : "128000000","Bonus" : "205000","Allowance" : "1500000"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJson", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Department","type" : "STRING","size" : "100"},{"id" : "EmployeeID","type" : "STRING","size" : "50"},{"id" : "EmployeeName","type" : "STRING","size" : "100"},{"id" : "Salary","type" : "INT","size" : "50"},{"id" : "Bonus","type" : "INT","size" : "50"},{"id" : "Allowance","type" : "INT","size" : "10"},{"id" : "Note","type" : "STRING","size" : "5"}]},"Rows" : [{"Department" : "HR","EmployeeID" : "E001","EmployeeName" : "John Smith","Salary" : "120000000","Bonus" : "200000","Allowance" : "1000000"},{"Department" : "HR","EmployeeID" : "E002","EmployeeName" : "Emily Johnson","Salary" : "11500000","Bonus" : "200000","Allowance" : "1000000"},{"Department" : "IT","EmployeeID" : "E003","EmployeeName" : "Michael Brown","Salary" : "130000000","Bonus" : "200000","Allowance" : "1500000"},{"Department" : "IT","EmployeeID" : "E004","EmployeeName" : "Sarah Williams","Salary" : "125000000","Bonus" : "200000","Allowance" : "1500000"},{"Department" : "IT","EmployeeID" : "E005","EmployeeName" : "David Taylor","Salary" : "128000000","Bonus" : "205000","Allowance" : "1500000"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","36","41","814","239",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsEmployee");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"STT\"/><Cell col=\"1\" text=\"Department\"/><Cell col=\"2\" text=\"EmployeeID\"/><Cell col=\"3\" text=\"EmployeeName\"/><Cell col=\"4\" text=\"Salary\"/><Cell col=\"5\" text=\"Bonus\"/><Cell col=\"6\" text=\"Allowance\"/><Cell col=\"7\" text=\"Note\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:Department\" suppress=\"1\" expr=\"dataset.getRowLevel(currow) &gt; 0 ? &quot;Total&quot; : Department\"/><Cell col=\"2\" text=\"bind:EmployeeID\" expr=\"dataset.getRowLevel(currow) &gt; 0 ? &quot;Count: &quot; + dataset.getGroupRangeCount(currow)  : EmployeeID\"/><Cell col=\"3\" text=\"bind:EmployeeName\"/><Cell col=\"4\" text=\"bind:Salary\"/><Cell col=\"5\" text=\"bind:Bonus\"/><Cell col=\"6\" text=\"bind:Allowance\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"bind:Note\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" expr=\"dataset.getSum(&quot;Salary&quot;)\" displaytype=\"number\"/><Cell col=\"5\" expr=\"dataset.getSum(&quot;Bonus&quot;)\" displaytype=\"number\"/><Cell col=\"6\" expr=\"dataset.getSum(&quot;Allowance&quot;)\" displaytype=\"number\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ssv","960","140","171","66",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("SSV_Dataset");
            this.addChild(obj.name, obj);

            obj = new Button("btn_json","960","250","171","66",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Json_Dataset");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xml","960","340","171","66",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("XML_Dataset");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_sample02.xfdl", function() {


        //Convert to SSV dataset
        this.btn_ssv_onclick = function(obj,e)
        {
        	var ds_SSV =  this.dsEmployee.saveSSV( "dsEmployee", "normal", "include", "exclude", "include" );
        	trace("ds_SSV: "+ds_SSV);
        };

        //Convert to Json dataset
        this.btn_json_onclick = function(obj,e)
        {
        	var ds_JSON = this.dsEmployee.saveJSON( "dsEmployee", "normal", "include", "exclude", "include" );
        	trace("ds_JSON: "+ds_JSON);
        };



        this.btn_xml_onclick = function(obj,e)
        {
        	var ds_XML = this.dsEmployee.saveXML( "dsEmployee", "normal", "include", "exclude", "include" );
        	trace("ds_XML: "+ds_XML);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.btn_ssv.addEventHandler("onclick",this.btn_ssv_onclick,this);
            this.btn_json.addEventHandler("onclick",this.btn_json_onclick,this);
            this.btn_xml.addEventHandler("onclick",this.btn_xml_onclick,this);
        };
        this.loadIncludeScript("Form_sample02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
