$(function () {
    //所在平台
    $('.szpt a').click(function () {
        $(this).addClass('cur');
        $(this).parent().siblings(".fltTabTo").children().removeClass('cur');
        //var category_id = $('.category_id').val();
        var szpt = $(this).attr('idvalue');
        var sclx = $(".sclx a[class='cur']").attr('idvalue');
        var zclx = $(".zclx a[class='cur']").attr('idvalue');
        var sblx = $(".sblx a[class='cur']").attr('idvalue');
        var sshy = $(".sshy a[class='cur']").attr('idvalue');
        var jg = $(".jg a[class='cur']").attr('idvalue');

        var dq = $("#isareaDd a[class='cur']").attr('idvalue');
        var koufen = $("#iskoufDd a[class='cur']").attr('idvalue');
        var nasui = $("#nsrzzDd a[class='cur']").attr('idvalue');
        var daihuo = $("#isdaihDd a[class='cur']").attr('idvalue');
        var huoyuan = $("#ishuoyDd a[class='cur']").attr('idvalue');
        var leibie = $("#sbleibDd a[class='cur']").attr('idvalue');
        var guohu = $("#sbguohDd a[class='cur']").attr('idvalue');
        var tuandui = $("#isteamDd a[class='cur']").attr('idvalue');

        if (sclx == undefined) { sclx = 0; }
        if (zclx == undefined) { zclx = 0; }
        if (sblx == undefined) { sblx = 0; }
        if (sshy == undefined) { sshy = 0; }
        if (jg == undefined) { jg = 0; }

        if (dq == undefined) { dq = 0; }
        if (koufen == undefined) { koufen = 0; }
        if (nasui == undefined) { nasui = 0; }
        if (daihuo == undefined) { daihuo = 0; }
        if (huoyuan == undefined) { huoyuan = 0; }
        if (leibie == undefined) { leibie = 0; }
        if (guohu == undefined) { guohu = 0; }
        if (tuandui == undefined) { tuandui = 0; }

        location.href = '/buyshop' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '/1.html';
        console.log('/buyshop/' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '.html');
    });

    //商城类型
    $('.sclx a').click(function () {
        $(this).addClass('cur');
        $(this).parent().siblings(".fltTabTo").children().removeClass('cur');

        var szpt = $(".szpt a[class='cur']").attr('idvalue');
        var sclx = $(this).attr('idvalue');
        var zclx = $(".zclx a[class='cur']").attr('idvalue');
        var sblx = $(".sblx a[class='cur']").attr('idvalue');
        var sshy = $(".sshy a[class='cur']").attr('idvalue');
        var jg = $(".jg a[class='cur']").attr('idvalue');

        var dq = $("#isareaDd a[class='cur']").attr('idvalue');
        var koufen = $("#iskoufDd a[class='cur']").attr('idvalue');
        var nasui = $("#nsrzzDd a[class='cur']").attr('idvalue');
        var daihuo = $("#isdaihDd a[class='cur']").attr('idvalue');
        var huoyuan = $("#ishuoyDd a[class='cur']").attr('idvalue');
        var leibie = $("#sbleibDd a[class='cur']").attr('idvalue');
        var guohu = $("#sbguohDd a[class='cur']").attr('idvalue');
        var tuandui = $("#isteamDd a[class='cur']").attr('idvalue');

        if (szpt == undefined) { szpt = 0; }
        if (zclx == undefined) { zclx = 0; }
        if (sblx == undefined) { sblx = 0; }
        if (sshy == undefined) { sshy = 0; }
        if (jg == undefined) { jg = 0; }

        if (dq == undefined) { dq = 0; }
        if (koufen == undefined) { koufen = 0; }
        if (nasui == undefined) { nasui = 0; }
        if (daihuo == undefined) { daihuo = 0; }
        if (huoyuan == undefined) { huoyuan = 0; }
        if (leibie == undefined) { leibie = 0; }
        if (guohu == undefined) { guohu = 0; }
        if (tuandui == undefined) { tuandui = 0; }

        location.href = '/buyshop' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '/1.html';
        console.log('/buyshop/' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '.html');
    });

    //注册类型
    $('.zclx a').click(function () {
        $(this).addClass('cur');
        $(this).parent().siblings(".fltTabTo").children().removeClass('cur');
        
        var szpt = $(".szpt a[class='cur']").attr('idvalue');
        var sclx = $(".sclx a[class='cur']").attr('idvalue');
        var zclx = $(this).attr('idvalue')
        var sblx = $(".sblx a[class='cur']").attr('idvalue');
        var sshy = $(".sshy a[class='cur']").attr('idvalue');
        var jg = $(".jg a[class='cur']").attr('idvalue');

        var dq = $("#isareaDd a[class='cur']").attr('idvalue');
        var koufen = $("#iskoufDd a[class='cur']").attr('idvalue');
        var nasui = $("#nsrzzDd a[class='cur']").attr('idvalue');
        var daihuo = $("#isdaihDd a[class='cur']").attr('idvalue');
        var huoyuan = $("#ishuoyDd a[class='cur']").attr('idvalue');
        var leibie = $("#sbleibDd a[class='cur']").attr('idvalue');
        var guohu = $("#sbguohDd a[class='cur']").attr('idvalue');
        var tuandui = $("#isteamDd a[class='cur']").attr('idvalue');

        if (szpt == undefined) { szpt = 0; }
        if (sclx == undefined) { sclx = 0; }
        if (sblx == undefined) { sblx = 0; }
        if (sshy == undefined) { sshy = 0; }
        if (jg == undefined) { jg = 0; }

        if (dq == undefined) { dq = 0; }
        if (koufen == undefined) { koufen = 0; }
        if (nasui == undefined) { nasui = 0; }
        if (daihuo == undefined) { daihuo = 0; }
        if (huoyuan == undefined) { huoyuan = 0; }
        if (leibie == undefined) { leibie = 0; }
        if (guohu == undefined) { guohu = 0; }
        if (tuandui == undefined) { tuandui = 0; }

        location.href = '/buyshop' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '/1.html';
        console.log('/buyshop/' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '.html');
    });

    //商标类型
    $('.sblx a').click(function () {
        $(this).addClass('cur');
        $(this).parent().siblings(".fltTabTo").children().removeClass('cur');
        
        var szpt = $(".szpt a[class='cur']").attr('idvalue');
        var sclx = $(".sclx a[class='cur']").attr('idvalue');
        var zclx = $(".zclx a[class='cur']").attr('idvalue');
        var sblx = $(this).attr('idvalue');
        var sshy = $(".sshy a[class='cur']").attr('idvalue');
        var jg = $(".jg a[class='cur']").attr('idvalue');

        var dq = $("#isareaDd a[class='cur']").attr('idvalue');
        var koufen = $("#iskoufDd a[class='cur']").attr('idvalue');
        var nasui = $("#nsrzzDd a[class='cur']").attr('idvalue');
        var daihuo = $("#isdaihDd a[class='cur']").attr('idvalue');
        var huoyuan = $("#ishuoyDd a[class='cur']").attr('idvalue');
        var leibie = $("#sbleibDd a[class='cur']").attr('idvalue');
        var guohu = $("#sbguohDd a[class='cur']").attr('idvalue');
        var tuandui = $("#isteamDd a[class='cur']").attr('idvalue');

        if (szpt == undefined) { szpt = 0; }
        if (sclx == undefined) { sclx = 0; }
        if (zclx == undefined) { zclx = 0; }
        if (sshy == undefined) { sshy = 0; }
        if (jg == undefined) { jg = 0; }

        if (dq == undefined) { dq = 0; }
        if (koufen == undefined) { koufen = 0; }
        if (nasui == undefined) { nasui = 0; }
        if (daihuo == undefined) { daihuo = 0; }
        if (huoyuan == undefined) { huoyuan = 0; }
        if (leibie == undefined) { leibie = 0; }
        if (guohu == undefined) { guohu = 0; }
        if (tuandui == undefined) { tuandui = 0; }

        location.href = '/buyshop' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '/1.html';
        console.log('/buyshop/' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '.html');
    });

    //所属行业
    $('.sshy a').click(function () {
        $(this).addClass('cur');
        $(this).parent().siblings(".fltTabTo").children().removeClass('cur');
       
        var szpt = $(".szpt a[class='cur']").attr('idvalue');
        var sclx = $(".sclx a[class='cur']").attr('idvalue');
        var zclx = $(".zclx a[class='cur']").attr('idvalue');
        var sblx = $(".sblx a[class='cur']").attr('idvalue');
        var sshy = $(this).attr('idvalue');
        var jg = $(".jg a[class='cur']").attr('idvalue');

        var dq = $("#isareaDd a[class='cur']").attr('idvalue');
        var koufen = $("#iskoufDd a[class='cur']").attr('idvalue');
        var nasui = $("#nsrzzDd a[class='cur']").attr('idvalue');
        var daihuo = $("#isdaihDd a[class='cur']").attr('idvalue');
        var huoyuan = $("#ishuoyDd a[class='cur']").attr('idvalue');
        var leibie = $("#sbleibDd a[class='cur']").attr('idvalue');
        var guohu = $("#sbguohDd a[class='cur']").attr('idvalue');
        var tuandui = $("#isteamDd a[class='cur']").attr('idvalue');

        if (szpt == undefined) { szpt = 0; }
        if (sclx == undefined) { sclx = 0; }
        if (zclx == undefined) { zclx = 0; }
        if (sblx == undefined) { sblx = 0; }
        if (jg == undefined) { jg = 0; }

        if (dq == undefined) { dq = 0; }
        if (koufen == undefined) { koufen = 0; }
        if (nasui == undefined) { nasui = 0; }
        if (daihuo == undefined) { daihuo = 0; }
        if (huoyuan == undefined) { huoyuan = 0; }
        if (leibie == undefined) { leibie = 0; }
        if (guohu == undefined) { guohu = 0; }
        if (tuandui == undefined) { tuandui = 0; }
        
        location.href = '/buyshop' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '/1.html';
        console.log('/buyshop/' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '.html');
    });

    //价格
    $('.jg a').click(function () {
        $(this).addClass('cur');
        $(this).parent().siblings(".fltTabTo").children().removeClass('cur');
       
        var szpt = $(".szpt a[class='cur']").attr('idvalue');
        var sclx = $(".sclx a[class='cur']").attr('idvalue');
        var zclx = $(".zclx a[class='cur']").attr('idvalue');
        var sblx = $(".sblx a[class='cur']").attr('idvalue');
        var sshy = $(".sshy a[class='cur']").attr('idvalue');
        var jg = $(this).attr('idvalue');

        var dq = $("#isareaDd a[class='cur']").attr('idvalue');
        var koufen = $("#iskoufDd a[class='cur']").attr('idvalue');
        var nasui = $("#nsrzzDd a[class='cur']").attr('idvalue');
        var daihuo = $("#isdaihDd a[class='cur']").attr('idvalue');
        var huoyuan = $("#ishuoyDd a[class='cur']").attr('idvalue');
        var leibie = $("#sbleibDd a[class='cur']").attr('idvalue');
        var guohu = $("#sbguohDd a[class='cur']").attr('idvalue');
        var tuandui = $("#isteamDd a[class='cur']").attr('idvalue');
        
        if (szpt == undefined) { szpt = 0; }
        if (sclx == undefined) { sclx = 0; }
        if (zclx == undefined) { zclx = 0; }
        if (sblx == undefined) { sblx = 0; }
        if (sshy == undefined) { sshy = 0; }

        if (dq == undefined) { dq = 0; }
        if (koufen == undefined) { koufen = 0; }
        if (nasui == undefined) { nasui = 0; }
        if (daihuo == undefined) { daihuo = 0; }
        if (huoyuan == undefined) { huoyuan = 0; }
        if (leibie == undefined) { leibie = 0; }
        if (guohu == undefined) { guohu = 0; }
        if (tuandui == undefined) { tuandui = 0; }

        location.href = '/buyshop' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '/1.html';
        console.log('/buyshop/' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '.html');
    });

    //地区
    $('#isareaDd a').click(function () {
        $(this).addClass('cur');
        $(this).parent().siblings(".fltTabTo").children().removeClass('cur');
        
        var szpt = $(".szpt a[class='cur']").attr('idvalue');
        var sclx = $(".sclx a[class='cur']").attr('idvalue');
        var zclx = $(".zclx a[class='cur']").attr('idvalue');
        var sblx = $(".sblx a[class='cur']").attr('idvalue');
        var sshy = $(".sshy a[class='cur']").attr('idvalue');
        var jg = $(".jg a[class='cur']").attr('idvalue');

        var dq = $(this).attr('idvalue');
        var koufen = $("#iskoufDd a[class='cur']").attr('idvalue');
        var nasui = $("#nsrzzDd a[class='cur']").attr('idvalue');
        var daihuo = $("#isdaihDd a[class='cur']").attr('idvalue');
        var huoyuan = $("#ishuoyDd a[class='cur']").attr('idvalue');
        var leibie = $("#sbleibDd a[class='cur']").attr('idvalue');
        var guohu = $("#sbguohDd a[class='cur']").attr('idvalue');
        var tuandui = $("#isteamDd a[class='cur']").attr('idvalue');

        if (szpt == undefined) { szpt = 0; }
        if (sclx == undefined) { sclx = 0; }
        if (zclx == undefined) { zclx = 0; }
        if (sblx == undefined) { sblx = 0; }
        if (sshy == undefined) { sshy = 0; }
        if (jg == undefined) { jg = 0; }

        //if (dq == undefined) { dq = 0; }
        if (koufen == undefined) { koufen = 0; }
        if (nasui == undefined) { nasui = 0; }
        if (daihuo == undefined) { daihuo = 0; }
        if (huoyuan == undefined) { huoyuan = 0; }
        if (leibie == undefined) { leibie = 0; }
        if (guohu == undefined) { guohu = 0; }
        if (tuandui == undefined) { tuandui = 0; }

        location.href = '/buyshop' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '/1.html';
        console.log('/buyshop/' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '.html');
    });

    //扣分情况
    $('#iskoufDd a').click(function () {
        $(this).addClass('cur');
        $(this).parent().siblings(".fltTabTo").children().removeClass('cur');
        
        var szpt = $(".szpt a[class='cur']").attr('idvalue');
        var sclx = $(".sclx a[class='cur']").attr('idvalue');
        var zclx = $(".zclx a[class='cur']").attr('idvalue');
        var sblx = $(".sblx a[class='cur']").attr('idvalue');
        var sshy = $(".sshy a[class='cur']").attr('idvalue');
        var jg = $(".jg a[class='cur']").attr('idvalue');

        var dq = $("#isareaDd a[class='cur']").attr('idvalue');
        var koufen = $(this).attr('idvalue');
        var nasui = $("#nsrzzDd a[class='cur']").attr('idvalue');
        var daihuo = $("#isdaihDd a[class='cur']").attr('idvalue');
        var huoyuan = $("#ishuoyDd a[class='cur']").attr('idvalue');
        var leibie = $("#sbleibDd a[class='cur']").attr('idvalue');
        var guohu = $("#sbguohDd a[class='cur']").attr('idvalue');
        var tuandui = $("#isteamDd a[class='cur']").attr('idvalue');

        if (szpt == undefined) { szpt = 0; }
        if (sclx == undefined) { sclx = 0; }
        if (zclx == undefined) { zclx = 0; }
        if (sblx == undefined) { sblx = 0; }
        if (sshy == undefined) { sshy = 0; }
        if (jg == undefined) { jg = 0; }

        if (dq == undefined) { dq = 0; }
        //if (koufen == undefined) { koufen = 0; }
        if (nasui == undefined) { nasui = 0; }
        if (daihuo == undefined) { daihuo = 0; }
        if (huoyuan == undefined) { huoyuan = 0; }
        if (leibie == undefined) { leibie = 0; }
        if (guohu == undefined) { guohu = 0; }
        if (tuandui == undefined) { tuandui = 0; }
        
        location.href = '/buyshop' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '/1.html';
        console.log('/buyshop/' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '.html');
    });

    //纳税人资质
    $('#nsrzzDd a').click(function () {
        $(this).addClass('cur');
        $(this).parent().siblings(".fltTabTo").children().removeClass('cur');
       
        var szpt = $(".szpt a[class='cur']").attr('idvalue');
        var sclx = $(".sclx a[class='cur']").attr('idvalue');
        var zclx = $(".zclx a[class='cur']").attr('idvalue');
        var sblx = $(".sblx a[class='cur']").attr('idvalue');
        var sshy = $(".sshy a[class='cur']").attr('idvalue');
        var jg = $(".jg a[class='cur']").attr('idvalue');

        var dq = $("#isareaDd a[class='cur']").attr('idvalue');
        var koufen = $("#iskoufDd a[class='cur']").attr('idvalue');
        var nasui = $(this).attr('idvalue');
        var daihuo = $("#isdaihDd a[class='cur']").attr('idvalue');
        var huoyuan = $("#ishuoyDd a[class='cur']").attr('idvalue');
        var leibie = $("#sbleibDd a[class='cur']").attr('idvalue');
        var guohu = $("#sbguohDd a[class='cur']").attr('idvalue');
        var tuandui = $("#isteamDd a[class='cur']").attr('idvalue');

        if (szpt == undefined) { szpt = 0; }
        if (sclx == undefined) { sclx = 0; }
        if (zclx == undefined) { zclx = 0; }
        if (sblx == undefined) { sblx = 0; }
        if (sshy == undefined) { sshy = 0; }
        if (jg == undefined) { jg = 0; }

        if (dq == undefined) { dq = 0; }
        if (koufen == undefined) { koufen = 0; }
        //if (nasui == undefined) { nasui = 0; }
        if (daihuo == undefined) { daihuo = 0; }
        if (huoyuan == undefined) { huoyuan = 0; }
        if (leibie == undefined) { leibie = 0; }
        if (guohu == undefined) { guohu = 0; }
        if (tuandui == undefined) { tuandui = 0; }

        location.href = '/buyshop' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '/1.html';
        console.log('/buyshop/' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '.html');
    });

    //是否带货
    $('#isdaihDd a').click(function () {
        $(this).addClass('cur');
        $(this).parent().siblings(".fltTabTo").children().removeClass('cur');
        
        var szpt = $(".szpt a[class='cur']").attr('idvalue');
        var sclx = $(".sclx a[class='cur']").attr('idvalue');
        var zclx = $(".zclx a[class='cur']").attr('idvalue');
        var sblx = $(".sblx a[class='cur']").attr('idvalue');
        var sshy = $(".sshy a[class='cur']").attr('idvalue');
        var jg = $(".jg a[class='cur']").attr('idvalue');

        var dq = $("#isareaDd a[class='cur']").attr('idvalue');
        var koufen = $("#iskoufDd a[class='cur']").attr('idvalue');
        var nasui = $("#nsrzzDd a[class='cur']").attr('idvalue');
        var daihuo = $(this).attr('idvalue');
        var huoyuan = $("#ishuoyDd a[class='cur']").attr('idvalue');
        var leibie = $("#sbleibDd a[class='cur']").attr('idvalue');
        var guohu = $("#sbguohDd a[class='cur']").attr('idvalue');
        var tuandui = $("#isteamDd a[class='cur']").attr('idvalue');

        if (szpt == undefined) { szpt = 0; }
        if (sclx == undefined) { sclx = 0; }
        if (zclx == undefined) { zclx = 0; }
        if (sblx == undefined) { sblx = 0; }
        if (sshy == undefined) { sshy = 0; }
        if (jg == undefined) { jg = 0; }

        if (dq == undefined) { dq = 0; }
        if (koufen == undefined) { koufen = 0; }
        if (nasui == undefined) { nasui = 0; }
        //if (daihuo == undefined) { daihuo = 0; }
        if (huoyuan == undefined) { huoyuan = 0; }
        if (leibie == undefined) { leibie = 0; }
        if (guohu == undefined) { guohu = 0; }
        if (tuandui == undefined) { tuandui = 0; }
        
        location.href = '/buyshop' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '/1.html';
        console.log('/buyshop/' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '.html');
    });

    //提供货源
    $('#ishuoyDd a').click(function () {
        $(this).addClass('cur');
        $(this).parent().siblings(".fltTabTo").children().removeClass('cur');
        
        var szpt = $(".szpt a[class='cur']").attr('idvalue');
        var sclx = $(".sclx a[class='cur']").attr('idvalue');
        var zclx = $(".zclx a[class='cur']").attr('idvalue');
        var sblx = $(".sblx a[class='cur']").attr('idvalue');
        var sshy = $(".sshy a[class='cur']").attr('idvalue');
        var jg = $(".jg a[class='cur']").attr('idvalue');

        var dq = $("#isareaDd a[class='cur']").attr('idvalue');
        var koufen = $("#iskoufDd a[class='cur']").attr('idvalue');
        var nasui = $("#nsrzzDd a[class='cur']").attr('idvalue');
        var daihuo = $("#isdaihDd a[class='cur']").attr('idvalue');
        var huoyuan = $(this).attr('idvalue');
        var leibie = $("#sbleibDd a[class='cur']").attr('idvalue');
        var guohu = $("#sbguohDd a[class='cur']").attr('idvalue');
        var tuandui = $("#isteamDd a[class='cur']").attr('idvalue');

        if (szpt == undefined) { szpt = 0; }
        if (sclx == undefined) { sclx = 0; }
        if (zclx == undefined) { zclx = 0; }
        if (sblx == undefined) { sblx = 0; }
        if (sshy == undefined) { sshy = 0; }
        if (jg == undefined) { jg = 0; }

        if (dq == undefined) { dq = 0; }
        if (koufen == undefined) { koufen = 0; }
        if (nasui == undefined) { nasui = 0; }
        if (daihuo == undefined) { daihuo = 0; }
        //if (huoyuan == undefined) { huoyuan = 0; }
        if (leibie == undefined) { leibie = 0; }
        if (guohu == undefined) { guohu = 0; }
        if (tuandui == undefined) { tuandui = 0; }

        location.href = '/buyshop' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '/1.html';
        console.log('/buyshop/' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '.html');
    });

    //商标类别
    $('#sbleibDd a').click(function () {
        $(this).addClass('cur');
        $(this).parent().siblings(".fltTabTo").children().removeClass('cur');
        
        var szpt = $(".szpt a[class='cur']").attr('idvalue');
        var sclx = $(".sclx a[class='cur']").attr('idvalue');
        var zclx = $(".zclx a[class='cur']").attr('idvalue');
        var sblx = $(".sblx a[class='cur']").attr('idvalue');
        var sshy = $(".sshy a[class='cur']").attr('idvalue');
        var jg = $(".jg a[class='cur']").attr('idvalue');

        var dq = $("#isareaDd a[class='cur']").attr('idvalue');
        var koufen = $("#iskoufDd a[class='cur']").attr('idvalue');
        var nasui = $("#nsrzzDd a[class='cur']").attr('idvalue');
        var daihuo = $("#isdaihDd a[class='cur']").attr('idvalue');
        var huoyuan = $("#ishuoyDd a[class='cur']").attr('idvalue');
        var leibie = $(this).attr('idvalue');
        var guohu = $("#sbguohDd a[class='cur']").attr('idvalue');
        var tuandui = $("#isteamDd a[class='cur']").attr('idvalue');

        if (szpt == undefined) { szpt = 0; }
        if (sclx == undefined) { sclx = 0; }
        if (zclx == undefined) { zclx = 0; }
        if (sblx == undefined) { sblx = 0; }
        if (sshy == undefined) { sshy = 0; }

        if (jg == undefined) { jg = 0; }
        if (dq == undefined) { dq = 0; }
        if (koufen == undefined) { koufen = 0; }
        if (nasui == undefined) { nasui = 0; }
        if (daihuo == undefined) { daihuo = 0; }
        if (huoyuan == undefined) { huoyuan = 0; }
        //if (leibie == undefined) { leibie = 0; }
        if (guohu == undefined) { guohu = 0; }
        if (tuandui == undefined) { tuandui = 0; }

        location.href = '/buyshop' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '/1.html';
        console.log('/buyshop/' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '.html');
    });

    //商标过户
    $('#sbguohDd a').click(function () {
        $(this).addClass('cur');
        $(this).parent().siblings(".fltTabTo").children().removeClass('cur');
        
        var szpt = $(".szpt a[class='cur']").attr('idvalue');
        var sclx = $(".sclx a[class='cur']").attr('idvalue');
        var zclx = $(".zclx a[class='cur']").attr('idvalue');
        var sblx = $(".sblx a[class='cur']").attr('idvalue');
        var sshy = $(".sshy a[class='cur']").attr('idvalue');
        var jg = $(".jg a[class='cur']").attr('idvalue');

        var dq = $("#isareaDd a[class='cur']").attr('idvalue');
        var koufen = $("#iskoufDd a[class='cur']").attr('idvalue');
        var nasui = $("#nsrzzDd a[class='cur']").attr('idvalue');
        var daihuo = $("#isdaihDd a[class='cur']").attr('idvalue');
        var huoyuan = $("#ishuoyDd a[class='cur']").attr('idvalue');
        var leibie = $("#sbleibDd a[class='cur']").attr('idvalue');
        var guohu = $(this).attr('idvalue');
        var tuandui = $("#isteamDd a[class='cur']").attr('idvalue');

        if (szpt == undefined) { szpt = 0; }
        if (sclx == undefined) { sclx = 0; }
        if (zclx == undefined) { zclx = 0; }
        if (sblx == undefined) { sblx = 0; }
        if (sshy == undefined) { sshy = 0; }
        if (jg == undefined) { jg = 0; }

        if (dq == undefined) { dq = 0; }
        if (koufen == undefined) { koufen = 0; }
        if (nasui == undefined) { nasui = 0; }
        if (daihuo == undefined) { daihuo = 0; }
        if (huoyuan == undefined) { huoyuan = 0; }
        if (leibie == undefined) { leibie = 0; }
        //if (guohu == undefined) { guohu = 0; }
        if (tuandui == undefined) { tuandui = 0; }

        location.href = '/buyshop' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '/1.html';
        console.log('/buyshop/' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '.html');
    });

    //团队转让
    $('#isteamDd a').click(function () {
        $(this).addClass('cur');
        $(this).parent().siblings(".fltTabTo").children().removeClass('cur');
        
        var szpt = $(".szpt a[class='cur']").attr('idvalue');
        var sclx = $(".sclx a[class='cur']").attr('idvalue');
        var zclx = $(".zclx a[class='cur']").attr('idvalue');
        var sblx = $(".sblx a[class='cur']").attr('idvalue');
        var sshy = $(".sshy a[class='cur']").attr('idvalue');
        var jg = $(".jg a[class='cur']").attr('idvalue');

        var dq = $("#isareaDd a[class='cur']").attr('idvalue');
        var koufen = $("#iskoufDd a[class='cur']").attr('idvalue');
        var nasui = $("#nsrzzDd a[class='cur']").attr('idvalue');
        var daihuo = $("#isdaihDd a[class='cur']").attr('idvalue');
        var huoyuan = $("#ishuoyDd a[class='cur']").attr('idvalue');
        var leibie = $("#sbleibDd a[class='cur']").attr('idvalue');
        var guohu = $("#sbguohDd a[class='cur']").attr('idvalue');
        var tuandui = $(this).attr('idvalue');

        if (szpt == undefined) { szpt = 0; }
        if (sclx == undefined) { sclx = 0; }
        if (zclx == undefined) { zclx = 0; }
        if (sblx == undefined) { sblx = 0; }
        if (sshy == undefined) { sshy = 0; }
        if (jg == undefined) { jg = 0; }

        if (dq == undefined) { dq = 0; }
        if (koufen == undefined) { koufen = 0; }
        if (nasui == undefined) { nasui = 0; }
        if (daihuo == undefined) { daihuo = 0; }
        if (huoyuan == undefined) { huoyuan = 0; }
        if (leibie == undefined) { leibie = 0; }
        if (guohu == undefined) { guohu = 0; }
        //if (tuandui == undefined) { tuandui = 0; }
        
        location.href = '/buyshop' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '/1.html';
        console.log('/buyshop/' + szpt + '-' + sclx + '-' + zclx + '-' + sblx + '-' + sshy + '-' + jg + '-' + dq + '-' + koufen + '-' + nasui + '-' + daihuo + '-' + huoyuan + '-' + leibie + '-' + guohu + '-' + tuandui + '.html');
    });

})
function trim(str) {
	return str.replace(/(^\s*)|(\s*$)/g, "");
}
function tab(a,b,c) {
	for(i=1;i<=b;i++) {
		if(c==i) {
			document.getElementById(a+"_mo_"+i).style.display = "block";
			document.getElementById(a+"_to_"+i).className = "no";
		} else {
			document.getElementById(a+"_mo_"+i).style.display = "none";
			document.getElementById(a+"_to_"+i).className = "q";
		}
	}
}

jQuery.cookie = function(name, value, options) {
	   if (typeof value != 'undefined') {
	       options = options || {};
	       if (value === null) {
	           value = '';
	           options.expires = -1;
	       }
	       var expires = '';
	       if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
	           var date;
	           if (typeof options.expires == 'number') {
	               date = new Date();
	               date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
	           } else {
	               date = options.expires;
	           }
	           expires = '; expires=' + date.toUTCString();
	       }
	       var path = options.path ? '; path=' + (options.path) : '';
	       var domain = options.domain ? '; domain=' + (options.domain) : '';
	       var secure = options.secure ? '; secure' : '';
	       document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
	   } else {
	       var cookieValue = null;
	       if (document.cookie && document.cookie != '') {
	           var cookies = document.cookie.split(';');
	           for (var i = 0; i < cookies.length; i++) {
	               var cookie = jQuery.trim(cookies[i]);
	               if (cookie.substring(0, name.length + 1) == (name + '=')) {
	                   cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
	                   break;
	               }
	           }
	       }
	       return cookieValue;
	   }
};
	
function hidexla() {
	if(document.getElementById("ioutflag").value == "") {
		xialahide();
	}
}
function hrefout() {
	document.getElementById("ioutflag").value = "";
	setTimeout("hidexla()",200);
}
function xialashow() {
	document.getElementById("ioutflag").value = "1";
	document.getElementById("imy5pao").style.display="";
	document.getElementById("iwupao").className="cur";
}
function xialahide() {
	document.getElementById("imy5pao").style.display="none";
	document.getElementById("iwupao").className="";
	document.getElementById("ioutflag").value = "";
}
	
function MouseClkO() {
	var spn = document.getElementById("ishopName").value;
	if(spn == "输入您想搜索的网店") {
		document.getElementById("ishopName").value = "";
	}
}
function MouseOutO() {
	var spn = document.getElementById("ishopName").value;
	if(spn == "") {
		document.getElementById("ishopName").value = "输入您想搜索的网店";
	}
}
function Seformgo() {
	var spn = document.getElementById("ishopName").value;
	if(spn == "输入您想搜索的网店") {
		document.getElementById("ishopName").value = "";
	}
	return true;
}
	
function GetLogUser(loguser,logstrs,nlgstrs) {
	var defstr = "您好，欢迎来到舞泡！<a href='http://www.5pao.com/ucenter/logout?service=http://www.5pao.com/theuser/user/safexit.jsp' class='zhuce'>[安全退出]</a>";
	if(loguser != null && loguser != "" && typeof(loguser) != "undefined") {
		if(logstrs != null && logstrs != "" && typeof(logstrs) != "undefined") {
			document.getElementById("ishowloginfo").innerHTML = logstrs.replace("用户",loguser);
		}else {
			document.getElementById("ishowloginfo").innerHTML = defstr;
		}
	}else {
		if(nlgstrs != null && nlgstrs != "" && typeof(nlgstrs) != "undefined") {
			document.getElementById("ishowloginfo").innerHTML = nlgstrs;
		}else {
			document.getElementById("ishowloginfo").innerHTML = defstr;
		}
	}
}
	
function kddscroll() {
	/*$(window).scroll( function() {
		var win= $(window).scrollTop();
		var csstop= $(window).height()/18;
		var percent=win+csstop;
		if(percent<0){
		percent=Math.ceil(percent);
		}else{
		percent=Math.floor(percent);
		var v = percent+"px";
		$(".MyOrders").css("top",v);
		}
		})*/
}
	
//弹出窗口(伸/缩):
function htanshow() {
	/*var iclass = document.getElementById("itanshow").className;
	if(iclass == "exit-yh exit-yh2") {
		document.getElementById("itanshow").className = "exit-yh";
		document.getElementById("itanmore").style.display="";
		$.cookie('tanshow', 'show', { expires: 30, path: '/'});
	}else {
		document.getElementById("itanshow").className = "exit-yh exit-yh2";
		document.getElementById("itanmore").style.display="none";
		$.cookie('tanshow', 'hide', { expires: 30, path: '/'});
	}*///2014-07-24;
	
	var showval = $.cookie("tanshow");
	if(showval == "mo1") { //第一层:
		document.getElementById("iwaigao").className = "con-yh jiagao";
		document.getElementById("itanshow").className = "exit-yh";
		document.getElementById("itanshow").innerHTML = "收起";
		document.getElementById("itanmore2").style.display=""; //打开第二层;
		$.cookie('tanshow', 'mo2', { expires: 30, path: '/'});
	}else if(showval == "mo2") { //已经是第二层:
		document.getElementById("iwaigao").className = "con-yh";
		document.getElementById("itanshow").className = "exit-yh exit-yh2";
		document.getElementById("itanshow").innerHTML = "更多";
		document.getElementById("itanmore").style.display="none";
		document.getElementById("itanmore2").style.display="none";
		$.cookie('tanshow', 'hide', { expires: 30, path: '/'});
	}else {
		document.getElementById("iwaigao").className = "con-yh";
		document.getElementById("itanshow").className = "exit-yh exit-yh2";
		document.getElementById("itanshow").innerHTML = "更多";
		document.getElementById("itanmore").style.display="";
		document.getElementById("itanmore2").style.display="none";
		$.cookie('tanshow', 'mo1', { expires: 30, path: '/'});
	}
}

function YwErwmShow(sg) {
	if(sg == "1") {
		document.getElementById("iywewm").style.display = "";
	}else {
		document.getElementById("iywewm").style.display = "none";
	}
}
	
/********************************08-05********************************/

function daover(bh,sg) {
    $("#div_"+bh+"_1").hide();
    $("#div_"+bh+"_2").hide();
    $("#dd_"+bh+"_"+sg).addClass("cur").siblings().removeClass("cur");
    $("#div_"+bh+"_"+sg).show();
}

function showDownMenu() {
    var timer = null;
    $('#allNav').click(function(){
        clearInterval(timer);
        $('#downMenuList').show();
    });
    $('#allNav').mouseleave(function(){
        clearInterval(timer);
        timer = setInterval("$('#downMenuList').hide()",30);
    });
    $('#downMenuList, .YinCang').hover(function() {
        clearInterval(timer);
    }, function(){
        timer = setInterval("$('#downMenuList').hide()",30);
    });
}

function showMenuDownList() {
    var timer = null;
    var isNum;
    $('.WP-nav .N-WP ul li').hover(function() {
        clearInterval(timer);
        $('.navDownList').hide();
        $('.WP-nav .N-WP ul li a').removeClass('hover');
        $(this).children('a').addClass('hover');
        $(this).children('.navDownList').show();
    }, function(){
        timer = setInterval(function(){
            $('.WP-nav .N-WP ul li a').removeClass('hover');
            $('.navDownList').hide();
        },100);
    });
    $('.navDownList').hover(function(){
        clearInterval(timer);
        $(this).children('.navDownList').show();
    }, function() {
        $('.WP-nav .N-WP ul li a').removeClass('hover');
        $('.navDownList').hide();
    });
}
	
//-------------------------------------------------------------
function MouseClk() {
	var spn = document.getElementById("ishopName").value;
	if(spn == "填写旺旺名或淘宝店铺地址" || spn == "填写关键词或网店编号" || spn == "填写关键词") {
		document.getElementById("ishopName").value = "";
	}
}

function MouseOut() {
	var spn = document.getElementById("ishopName").value;
	if(spn == "") {
		var sg = document.getElementById("isosoflag").value;
		if(sg == "1") {
			document.getElementById("ishopName").value = "填写旺旺名或淘宝店铺地址";
		}else if(sg == "2") {
			document.getElementById("ishopName").value = "填写关键词或网店编号";
		}else if(sg == "3") {
			document.getElementById("ishopName").value = "填写关键词";
		}
	}
}
	
function hidesoxla() {
	if(document.getElementById("isoutflag").value == "") {
		soxialahide();
	}
}
function hrefsout() {
	document.getElementById("isoutflag").value = "";
	setTimeout("hidesoxla()",200);
}
function soxialashow() {
	document.getElementById("isoutflag").value = "1";
	document.getElementById("isodl").style.display="";
}
function soxialahide() {
	document.getElementById("isodl").style.display="none";
	document.getElementById("isoutflag").value = "";
}

function sosoShow(sg) {
	document.getElementById("isosoflag").value = sg;
	if(sg == "1") {
		document.getElementById("isoshow1").innerHTML="估价";
		document.getElementById("ishopName").value = "填写旺旺名或淘宝店铺地址";
		document.getElementById("isobtn").value = "网店估价";
	}else if(sg == "2") {
		document.getElementById("isoshow1").innerHTML="天猫网店";
		document.getElementById("ishopName").value = "填写关键词或网店编号";
		document.getElementById("isobtn").value = "搜索网店";
	}else if(sg == "3") {
		document.getElementById("isoshow1").innerHTML="求购";
		document.getElementById("ishopName").value = "填写关键词";
		document.getElementById("isobtn").value = "搜索求购";
	}else if(sg == "4") {
		document.getElementById("isoshow1").innerHTML="淘宝网店";
		document.getElementById("ishopName").value = "填写关键词或网店编号";
		document.getElementById("isobtn").value = "搜索网店";
	}else if(sg == "5") {
		document.getElementById("isoshow1").innerHTML="其它网店";
		document.getElementById("ishopName").value = "填写关键词或网店编号";
		document.getElementById("isobtn").value = "搜索网店";
	}
	document.getElementById("isodl").style.display="none";
}

function srhformSbt() {
	var spn = document.getElementById("ishopName").value;
	if(spn == "填写旺旺名或淘宝店铺地址" || spn == "填写关键词或网店编号" || spn == "填写关键词") {
		spn = "";
		document.getElementById("ishopName").value = "";
	}	
	var sg = document.getElementById("isosoflag").value;
	if(sg == "1") {
		document.getElementById("iformfind").method = "post";
		document.getElementById("iformfind").action = "http://www.5pao.com/shopmm/spevaluate.html";
		document.getElementById("iformfind").submit();
	}else if(sg == "2") {
		window.open("http://www.5pao.com/shopmm/tmallIndexNew-3--------------------"+spn+"---------1.html",'','');
	}else if(sg == "4") {
		window.open("http://www.5pao.com/shopmm/transEnprsNew-1-----------------"+spn+"-----------1.html",'','');
	}else if(sg == "5") {
		window.open("http://www.5pao.com/shopmm/qitaIndexNew-------------"+spn+"--------1.html",'','');
	}
	//61018:
	try{
		dwr.engine.setAsync(false);
		spIndexDwr.SaveSearchRec("4",sg,spn,
		{
	      callback:function(data) {}
		});
	}catch(e){}
}
//2015-08-07:
function srhformSbtMb() {
	/*var spn = document.getElementById("ishopName").value;
	if(spn == "填写旺旺名或淘宝店铺地址" || spn == "填写关键词或网店编号" || spn == "填写关键词") {
		spn = "";
		document.getElementById("ishopName").value = "";
	}	
	var sg = document.getElementById("isosoflag").value;
	if(sg == "1") {
		document.getElementById("iformfind").method = "post";
		document.getElementById("iformfind").action = "http://m.5pao.com/shopmm/spevaluate.html";
		document.getElementById("iformfind").submit();
	}else if(sg == "2") {
		window.open("http://m.5pao.com/shopmm/tmallIndexNew-3m--------------------"+spn+"--------1.html",'','');
	}else if(sg == "3") {
		window.open("http://m.5pao.com/shopmm/qiugouIndex-1-------"+spn+"------------1.html",'','');
	}else if(sg == "4") {
		window.open("http://m.5pao.com/shopmm/transEnprsNew-1m-----------------"+spn+"---------1.html",'','');
	}else if(sg == "5") {
		window.open("http://m.5pao.com/shopmm/qitaIndexNew-m------------"+spn+"--------1.html",'','');
	}*/
}

function WeiXinShow() {
	window.open("/theuser/user/weixin.htm",'',"width=500,height=470,top=100,left=400");
}

//店铺对比20150325:
function ShopShowBi() {
	
	var dt = new Date().getTime();
	Iframe({
    	Url:"showkddlist.html?dt="+dt,
    	Width:822,
		Height:528,
		scrolling:'no',
		isIframeAutoHeight:false,
		isShowIframeTitle:false,
    	call:function(data){
        }
     });
}

//菜单栏发布求购
function postWant() {
    var p = $('#postDemand');
    var e = $('#postEnter');
    var asrc = e.attr('src').split('.');

    if(p.css('display') == 'none') {
        p.show(500);
        asrc[asrc.length - 1] = 'png';
    } else{
        p.hide(500);
        asrc[asrc.length - 1] = 'gif';
    }
    var ssrc = asrc.join('.');
    e.attr('src',ssrc);
}

function checkXqMob(mob) {
	var reg0=/^1\d{10}$/;
	var res=false;
	if (reg0.test(mob)) {
		res=true;
	}
	return res;
}
function checksz(argvalue) {
	argvalue = argvalue.toString();
	var validChars = "0123456789";
	for (var n = 0; n < argvalue.length; n++) {
		if (validChars.indexOf(argvalue.substring(n, n+1)) == -1) return false;
	}
	return true;
}
function XqMouseClk(vtype,otype) {
	if(vtype == "1") { //姓名:
		var xqname = trim($('#xqname').val());
		if(otype == "2") { //鼠标离开:
			if(xqname == "") {
				$('#xqname').val("例如：何先生");
			}
		}else { //点击:
			if(xqname == "例如：何先生") {
				$('#xqname').val("");
			}
		}
	}else if(vtype == "2") {
		var xqmobile = trim($('#xqmobile').val());
		if(otype == "2") { //鼠标离开:
			if(xqmobile == "") {
				$('#xqmobile').val("例如：15688878886");
			}
		}else { //点击:
			if(xqmobile == "例如：15688878886") {
				$('#xqmobile').val("");
			}
		}
	}else if(vtype == "3") {
		var xqqq = trim($('#xqqq').val());
		if(otype == "2") { //鼠标离开:
			if(xqqq == "") {
				$('#xqqq').val("例如：826935668");
			}
		}else { //点击:
			if(xqqq == "例如：826935668") {
				$('#xqqq').val("");
			}
		}
	}else if(vtype == "4") {
		var yourWant = trim($('#yourWant').val());
		if(otype == "2") { //鼠标离开:
			if(yourWant == "") {
				$('#yourWant').val("例如：求购一个江浙沪地区女装类天猫店");
			}
		}else { //点击:
			if(yourWant == "例如：求购一个江浙沪地区女装类天猫店") {
				$('#yourWant').val("");
			}
		}
	}
}

//发布需求:
function SendXuqiu() {
	
	//获取填写信息:
	var xqshop = "";
	if(document.getElementById("xqshop1").checked == true) {
		xqshop = "天猫网店";
	}else if(document.getElementById("xqshop2").checked == true) {
		xqshop = "淘宝网店";
	}else if(document.getElementById("xqshop3").checked == true) {
		xqshop = "其它网店";
	}
	if(xqshop == "") {
		alert("温馨提示：请选择店铺分类！");
		return ;
	}
	var xqname = trim($('#xqname').val());
	if(xqname == "" || xqname == "例如：何先生") {
		alert("温馨提示：请填写姓名！");
		$('#xqname').focus();
		return ;
	}
	if(xqname.length < 2 || xqname.length > 10) {
		alert("温馨提示：请正确填写姓名！");
		$('#xqname').focus();
		return ;
	}
	var xqmobile = trim($('#xqmobile').val());
	if(xqmobile == "" || xqmobile == "例如：15688878886") {
		alert("温馨提示：请填写手机号！");
		$('#xqmobile').focus();
		return ;
	}
	if(checkXqMob(xqmobile) == false) {
		alert("温馨提示：请正确填写手机号！");
		$('#xqmobile').focus();
		return ;
	}
	var xqqq = trim($('#xqqq').val());
	if(xqqq == "" || xqqq == "例如：826935668") {
		alert("温馨提示：请填写QQ号！");
		$('#xqqq').focus();
		return ;
	}
	if(xqqq.length < 4 || xqqq.length > 12) {
		alert("温馨提示：请正确填写QQ号！");
		$('#xqqq').focus();
		return ;
	}
	if(checksz(xqqq) == false) {
		alert("温馨提示：请正确填写QQ号！");
		$('#xqqq').focus();
		return ;
	}
	var yourWant = trim($('#yourWant').val());
	if(yourWant == "例如：求购一个江浙沪地区女装类天猫店") {
		yourWant = "";
	}
	if(yourWant != "") {
		if(yourWant.length > 200) {
			alert("温馨提示：需求内容限200字！");
			$('#yourWant').focus();
			return ;
		}
	}

	var res = 0;
	//DWREngine.setAsync(false);
	dwr.engine.setAsync(false);
	spIndexDwr.SendXuqiu(xqname,xqmobile,xqqq,yourWant,xqshop,
	{
      callback:function(data) {
        if(data != null && data == "ok") {
        	res = 1;
    	}
	  }
	});
	
	if(res == 1) {
		$('#ixqsdiv').css('display','none');
		$('#ixqediv').css('display','block');
	}else {
		alert("温馨提示：信息提交失败，请稍后重试哦！");
	}
}

//其它方式发布:
function XqsendShow() {
	Iframe({
    	Url:"toxuqiu.html",
    	Width:670,
		Height:430,
		scrolling:'no',
		isIframeAutoHeight:false,
		isShowIframeTitle:false,
    	call:function(data) {
        }
     });
}
//居中发布提交:
function XuqiuSbt() {
	
	//获取填写信息:
	var xqshop = "";
	if(document.getElementById("xqshop1").checked == true) {
		xqshop = "天猫网店";
	}else if(document.getElementById("xqshop2").checked == true) {
		xqshop = "淘宝网店";
	}else if(document.getElementById("xqshop3").checked == true) {
		xqshop = "其它网店";
	}
	if(xqshop == "") {
		alert("温馨提示：请选择店铺分类！");
		return ;
	}
	var xqname = trim($('#xqname').val());
	if(xqname == "" || xqname == "例如：何先生") {
		alert("温馨提示：请填写姓名！");
		$('#xqname').focus();
		return ;
	}
	if(xqname.length < 2 || xqname.length > 10) {
		alert("温馨提示：请正确填写姓名！");
		$('#xqname').focus();
		return ;
	}
	var xqmobile = trim($('#xqmobile').val());
	if(xqmobile == "" || xqmobile == "例如：15688878886") {
		alert("温馨提示：请填写手机号！");
		$('#xqmobile').focus();
		return ;
	}
	if(checkXqMob(xqmobile) == false) {
		alert("温馨提示：请正确填写手机号！");
		$('#xqmobile').focus();
		return ;
	}
	var xqqq = trim($('#xqqq').val());
	if(xqqq == "" || xqqq == "例如：826935668") {
		alert("温馨提示：请填写QQ号！");
		$('#xqqq').focus();
		return ;
	}
	if(xqqq.length < 4 || xqqq.length > 12) {
		alert("温馨提示：请正确填写QQ号！");
		$('#xqqq').focus();
		return ;
	}
	if(checksz(xqqq) == false) {
		alert("温馨提示：请正确填写QQ号！");
		$('#xqqq').focus();
		return ;
	}
	var yourWant = trim($('#yourWant').val());
	if(yourWant == "例如：求购一个江浙沪地区女装类天猫店") {
		yourWant = "";
	}
	if(yourWant != "") {
		if(yourWant.length > 200) {
			alert("温馨提示：需求内容限200字！");
			$('#yourWant').focus();
			return ;
		}
	}
	$('#itxqform').submit();
}

function fourshow() {
	
	var noshow = $.cookie('nofourshow');
	if(noshow != null && noshow == "yh") {
		//
	}else {

		Iframe({
	    	Url:"http://www.5pao.com/fouryear.htm",
	    	Width:807,
			Height:506,
			scrolling:'no',
			isIframeAutoHeight:false,
			isShowIframeTitle:false,
	    	call:function(data) {
	        }
	    });
	}
}

//tanchuang5818:
function tjshopshow() {
	
	var noshow = $.cookie('noshopshow');
	if(noshow != null && noshow == "yh") {
		//
	}else {

		Iframe({
	    	Url:"http://www.5pao.com/shopmm/shopshow.html",
	    	Width:807,
			Height:506,
			scrolling:'no',
			isIframeAutoHeight:false,
			isShowIframeTitle:false,
	    	call:function(data) {
	        }
	    });
		setTimeout("shopTanClose()",15000);
	}
}
function shopTanClose() {
	$.cookie('noshopshow', 'yh', { expires: 1, path: '/' });
	parent.Close();
}

//公共咨询框:
function ShowAskWin(aurl) {
	window.open(aurl,'',"width=644,height=544,toolbar=no,scrollbars=no,menubar=no,status=no");
}
function QQToAsk(spId,saId,asktp) {
	
	if(device.mobile() || device.ipad()) {
		
		window.location.href = "askshowsale.action?spId="+spId+"&saId="+saId+"&asktp="+asktp;
	}else {
		window.open("askshowsale.action?spId="+spId+"&saId="+saId+"&asktp="+asktp,'',"width=644,height=544,toolbar=no,scrollbars=no,menubar=no,status=no");
	}
}
//51214:
function SjQqToAsk(buytype) {
	
	if(device.mobile() || device.ipad()) {
		
		window.location.href = "http://www.5pao.com/5paoIndex/getshowsale.action?sptype="+buytype;
	}else {
		window.open("http://www.5pao.com/5paoIndex/getshowsale.action?sptype="+buytype,'',"width=644,height=544,toolbar=no,scrollbars=no,menubar=no,status=no");
	}
}
function QaqqToAsk(zxtype) {
	
	if(device.mobile() || device.ipad()) {
		
		window.location.href = "http://www.5pao.com/5paoIndex/getzixunsale.action?sptype="+zxtype;
	}else {
		window.open("http://www.5pao.com/5paoIndex/getzixunsale.action?sptype="+zxtype,'',"width=644,height=544,toolbar=no,scrollbars=no,menubar=no,status=no");
	}
}
//51214:
function zxnwshow() {
	Iframe({
    	Url:"http://www.5pao.com/5paoIndex/workshow.html",
    	Width:707,
		Height:330,
		scrolling:'no',
		border:0,
		isIframeAutoHeight:false,
		isShowIframeTitle:false,
    	call:function(data) {
        }
    });
}
//60606:
function GetRandomNum(Min,Max) {
	var Range = Max - Min;
	var Rand = Math.random();
	return (Min + Math.round(Rand * Range));
}
function QQSjAddAsk(qsg) {
	var aurl = "";
	if(qsg == "cs") {
		var gnum = GetRandomNum(1,10);
		var snum = parseInt(gnum);
		if(snum == 1) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2853670884&site=qq&menu=yes";
		}else if(snum == 2) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2355963695&site=qq&menu=yes";
		}else if(snum == 3) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2355845898&site=qq&menu=yes";
		}else if(snum == 4) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2853821070&site=qq&menu=yes";
		}else if(snum == 5) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2853821087&site=qq&menu=yes";
		}else if(snum == 6) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2853670892&site=qq&menu=yes";
		}else if(snum == 7) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2853670880&site=qq&menu=yes";
		}else if(snum == 8) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2355927173&site=qq&menu=yes";
		}else if(snum == 9) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2355963692&site=qq&menu=yes";
		}else if(snum == 10) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2355676101&site=qq&menu=yes";
		}else {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2355676101&site=qq&menu=yes";
		}
	}
	window.open(aurl,'',"width=644,height=544,toolbar=no,scrollbars=no,menubar=no,status=no");
}

function AddWpaoFavorite() {
	var title = "舞泡";
	var url = "http://www.5pao.com";
	try {
		window.external.addFavorite(url,title);
	}catch(e) {
		try {
	    	window.sidebar.addPanel(title,url,"");
		}catch(e) {
			alert("抱歉,您的浏览器不支持,请按 Ctrl+D 手动收藏!");
	    }
	}
}

function showKefuqqValid() {
	layer.open({
		type: 2,
        title: false,
        closeBtn: false,
        shadeClose: true,
        resize:false,
        shade: 0.5,
        area: ['520px','415px'],
        content: '/5paoIndex/checkservqq.html',
        success: function(layero, index) {
        	layer.serverValidIndex = index;
        }
	});
}
