package com.minhvu.reportservice.controller;

import com.minhvu.reportservice.dto.CreateReportRequest;
import com.minhvu.reportservice.dto.UpdateReportRequest;
import com.minhvu.reportservice.model.Report;
import com.minhvu.reportservice.service.ReportService;
import io.sentry.Sentry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.lang.Exception;
import io.sentry.Sentry;
@RestController
@RequestMapping("/api/v1/reports")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @PostMapping
    public ResponseEntity<Report> createReport(@RequestBody CreateReportRequest report) {
        try {
            throw new Exception("Test if create report error.");
        } catch (Exception e) {
            Sentry.captureException(e);
        }
        return ResponseEntity.ok(reportService.createReport(report));
    }

    @GetMapping
    public ResponseEntity<Page<Report>> getAllReports(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "title") String sortBy,
            @RequestParam(defaultValue = "ASC") Sort.Direction direction
    ) {

        try {
            throw new Exception("Test if load report error.");
        } catch (Exception e) {
            Sentry.captureException(e);
        }

        Page<Report> reportPage = reportService.getAllReports(PageRequest.of(page, size, Sort.by(direction, sortBy)));
        return ResponseEntity.ok(reportPage);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Report> getReportById(@PathVariable String id) {
        return ResponseEntity.ok(reportService.getReportById(id));
    }

    @PutMapping
    public ResponseEntity<Report> updateReport(@RequestBody UpdateReportRequest report) {
        return ResponseEntity.ok(reportService.updateReport(report));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReport(@PathVariable String id) {
        reportService.deleteReport(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/type/{type}")
    public ResponseEntity<List<Report>> findByType(@PathVariable String type) {
        return ResponseEntity.ok(reportService.findByType(type));
    }
}